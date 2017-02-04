class Analysis < ApplicationRecord

 WATSON_DATA = "https://gateway-a.watsonplatform.net/calls/url/URLGetCombinedData?url="
 WATSON_TEXT = "https://gateway-a.watsonplatform.net/calls/url/URLGetText?url="
 WATSON_INFO = "/&outputMode=json&extract=title,author=1&maxRetrieve=3&"
 WATSON_CLOSING = "&outputMode=json&extract&apikey="

 def self.watson_call(params)
   @opened_uri = {}
   @data = WATSON_DATA + params['url'] + WATSON_CLOSING + ENV['WATSON_KEY']
   @text = WATSON_TEXT + params['url'] + WATSON_CLOSING + ENV['WATSON_KEY']
   @info = WATSON_DATA + params['url'] + WATSON_INFO + WATSON_CLOSING + ENV['WATSON_KEY']
   @opened_uri[:data] = open(@data, 'Accept-Encoding' => '') {|f| f.read }
   @opened_uri[:text] = open(@text, 'Accept-Encoding' => '') {|f| f.read }
   @opened_uri[:info] = open(@info, 'Accept-Encoding' => '') {|f| f.read }
   return JSON.parse(@opened_uri[:text])
 end

 def self.stage_render
   @response = @opened_uri[:info] + @opened_uri[:text] + @opened_uri[:data]
 end
end
