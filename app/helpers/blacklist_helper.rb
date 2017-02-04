module BlacklistHelper
  require 'net/http'
  require 'uri'

  REASONS = {
    'bias' => "Extreme Bias: Sources that traffic in political propaganda and gross distortions of fact.",
    'conspiracy' => "Conspiracy Theory: Sources that are well-known promoters of kooky conspiracy theories.",
    'fake' => "Fake News: Sources that fabricate stories out of whole cloth with the intent of pranking the public.",
    'junksci' => "Junk Science: Sources that promote pseudoscience, metaphysics, naturalistic fallacies, and other scientifically dubious claims.",
    'rumors' => "Rumor Mill: Sources that traffic in rumors, innuendo, and unverified claims.",
    'satire' => "Satire: Sources that provide humorous commentary on current events in the form of fake news.",
    'state' => "State News: Sources in repressive states operating under government sanction.",
    'hate' => "Hate Group: Sources that actively promote racism, misogyny, homophobia, and other forms of discrimination.",
    'clickbait' => "Clickbait: Sources that are aimed at generating online advertising revenue and rely on sensationalist headlines or eye-catching pictures.",
    'not_listed' => 'This site is not blacklisted'
  }

  def self.shorten_url(url_string)
    url_string.scan(
    /^(((https|http)?:?\/{2})?w{3}?\.?)?([0-9a-zA-Z\-%?]+\.\w{2,3})/).flatten.last
  end

  def self.matched(url_string)
    BlackList.where("url like ?", "%#{shorten_url(url_string)}%")
  end

  def self.check_domain(url)
    unless matched(url).empty?
      blacklist_reason = matched(url).last.reason
    else
      blacklist_reason = 'not_listed'
    end
    tag = REASONS[blacklist_reason]
  end
  # -- full contact--
  def self.request(domain_string)
    uri = URI.parse("https://api.fullcontact.com/v2/company/lookup.json?domain="+domain_string)
    request = Net::HTTP::Get.new(uri)
    request["X-Fullcontact-Apikey"] = "dda857367981e4f1"
    req_options = {
      use_ssl: uri.scheme == "https",
    }
    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    response = JSON.parse(response.body)
    get_full_info(response)
  end

  def self.get_full_info(response)
    company_info = {}
    company_info['bio'] = response['socialProfiles'].last['bio'] || 'This company did not include a bio.'
    company_info['website'] = response['website']
    company_info['name'] = response['organization']['name'] || 'Company Name not found.'
    company_info['founded'] = response['organization']['founded']
    company_info['onlineSince'] = response['onlineSince']
    company_info['socialMedia'] = response['socialProfiles'].to_json
    company_info['email'] = response['organization']['contactInfo']['emailAddresses'].first['value'] if response['organization']['contactInfo']['emailAddresses']
    company_info
  end
end
