class Analysis < ApplicationRecord

 WATSON_DATA = "https://gateway-a.watsonplatform.net/calls/url/URLGetCombinedData?url="
 WATSON_TEXT = "https://gateway-a.watsonplatform.net/calls/url/URLGetText?url="
 WATSON_INFO = "/&outputMode=json&extract=title,author=1&maxRetrieve=3&"
 WATSON_CLOSING = "&outputMode=json&extract&apikey="

 def self.watson_call(urlString)
   @opened_uri = {}
   @data = WATSON_DATA + urlString + WATSON_CLOSING + ENV['WATSON_KEY']
   @text = WATSON_TEXT + urlString + WATSON_CLOSING + ENV['WATSON_KEY']
   @info = WATSON_DATA + urlString + WATSON_INFO + WATSON_CLOSING + ENV['WATSON_KEY']
   @opened_uri[:data] = JSON.parse(open(@data, 'Accept-Encoding' => '') {|f| f.read })
   @opened_uri[:text] = JSON.parse(open(@text, 'Accept-Encoding' => '') {|f| f.read })
   @opened_uri[:info] = JSON.parse(open(@info, 'Accept-Encoding' => '') {|f| f.read })
   stage_render
 end

 private

 def self.stage_render
   binding.pry
   @response['taxonomy'] = @opened_uri[:data]['taxonomy']
   @response['concepts'] = keep_relevant_concepts(@opened_uri[:data]['concepts'])
   @response['entities'] = keep_relevant_entities(@opened_uri[:data]['entities'])
   @response['keywords'] = keep_relevant_keywords(@opened_uri[:data]['keywords'])

 end

 def keep_relevant_concepts(result)
   result.keep_if |r| do
     r['relevance'].to_f >= 0.8
   end
 end

 def keep_relevant_entities(result)
   result.keep_if |r| do
     r['relevance'].to_f >= 0.7
   end
 end

 def keep_relevant_keywords(result)
   result.keep_if |r| do
     r['relevance'].to_f >= 0.6
   end
 end

end
