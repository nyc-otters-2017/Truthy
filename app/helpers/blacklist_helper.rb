module BlacklistHelper

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

end
