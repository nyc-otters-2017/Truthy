module AnalysisHelper < ApplicationHelper

  def watson_call(url)
    @watson_call = "https://gateway-a.watsonplatform.net/calls/url/URLGetCombinedData?url=#{url}&outputMode=json&extract=authors,doc-emotion,entities,keywords,title,taxonomy,concepts&sentiment=1&maxRetrieve=3&apikey=#{ENV['WATSON_API_KEY']}"
  end

end
