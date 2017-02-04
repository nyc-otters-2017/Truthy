class Analysis < ApplicationRecord

 WATSON_DATA = "https://gateway-a.watsonplatform.net/calls/url/URLGetCombinedData?url="
 WATSON_TEXT = "https://gateway-a.watsonplatform.net/calls/url/URLGetText?url="
 WATSON_INFO = "/&outputMode=json&extract=title,author=1&maxRetrieve=3&"
 WATSON_CLOSING = "&outputMode=json&extract&apikey="

 def self.watson_call(url)
   @opened_uri, @response = {}, {}
   data = WATSON_DATA + url + WATSON_CLOSING + ENV['WATSON_KEY']
   text = WATSON_TEXT + url + WATSON_CLOSING + ENV['WATSON_KEY']
   info = WATSON_DATA + url + WATSON_INFO + WATSON_CLOSING + ENV['WATSON_KEY']
   @opened_uri[:data] = JSON.parse(open(data, 'Accept-Encoding' => '') {|f| f.read })
   @opened_uri[:text] = JSON.parse(open(text, 'Accept-Encoding' => '') {|f| f.read })
   @opened_uri[:info] = JSON.parse(open(info, 'Accept-Encoding' => '') {|f| f.read })
   stage_render
   @response
 end

 private

 def self.stage_render
   @response['text'] = @opened_uri[:text]['text']
   @response['title'] = @opened_uri[:info]['title']
   @response['author'] = @opened_uri[:info]['author'] || 'No author is listed'
   @response['taxonomy'] = @opened_uri[:data]['taxonomy']
   @response['concepts'] = keep_relevant_concepts(@opened_uri[:data]['concepts'])
   @response['entities'] = keep_relevant_entities(@opened_uri[:data]['entities'])
   @response['keywords'] = keep_relevant_keywords(@opened_uri[:data]['keywords'])
 end

 def self.keep_relevant_concepts(result)
   result.keep_if do |r|
     r['relevance'].to_f >= 0.8
   end
 end

 def self.keep_relevant_entities(result)
   result.keep_if do |r|
     r['relevance'].to_f >= 0.7
   end
 end

 def self.keep_relevant_keywords(result)
   result.keep_if do |r|
     r['relevance'].to_f >= 0.6
   end
 end

end
