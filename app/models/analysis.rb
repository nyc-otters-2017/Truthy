class Analysis < ApplicationRecord

  WATSON_DATA = "https://gateway-a.watsonplatform.net/calls/url/URLGetCombinedData?url="
  WATSON_TEXT = "https://gateway-a.watsonplatform.net/calls/url/URLGetText?url="
  WATSON_INFO = "/&outputMode=json&extract=title,author=1&maxRetrieve=3&"
  WATSON_CLOSING = "&outputMode=json&extract&apikey="

  def self.watson_call(params)
    @response = {}
    @response[:data] = WATSON_DATA << params['url'] << WATSON_CLOSING << ENV['WATSON_KEY']
    
  end

end
