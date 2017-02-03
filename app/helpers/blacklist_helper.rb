
module BlacklistHelper
  def self.reason_handle(reason)
    case reason
    when "bias"
      return "Extreme Bias: Sources that traffic in political propaganda and gross distortions of fact."
    when "conspiracy"
      return "Conspiracy Theory: Sources that are well-known promoters of kooky conspiracy theories."
    when 'fake'
      return "Fake News: Sources that fabricate stories out of whole cloth with the intent of pranking the public."
    when 'junksci'
      return "Junk Science: Sources that promote pseudoscience, metaphysics, naturalistic fallacies, and other scientifically dubious claims."
    when "rumors"
      return "Rumor Mill: Sources that traffic in rumors, innuendo, and unverified claims."
    when "satire"
      return "Satire: Sources that provide humorous commentary on current events in the form of fake news."
    when "state"
      return "State News: Sources in repressive states operating under government sanction."

    when "hate"
      return "Hate Group: Sources that actively promote racism, misogyny, homophobia, and other forms of discrimination."

    when "clickbait"
      return "Clickbait: Sources that are aimed at generating online advertising revenue and rely on sensationalist headlines or eye-catching pictures."
    else
      "I don't know that type of news"
    end
  end

  def shorten_url(url_string)
    url_string.scan(
    /^(((https|http)?:?\/{2})?w{3}?\.?)?([0-9a-zA-Z-%?]+\.\w{2,3})/).flatten.last
  end

  def self.check_url(url_string)
    BlackList.all.select do |domain|
       url_string.include?(domain[:url])
    end # return array with object if found
  end

end
