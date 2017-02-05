class Analysis < ApplicationRecord

# pieces of watson API calls
 WATSON_DATA = "https://gateway-a.watsonplatform.net/calls/url/URLGetCombinedData?url="
 WATSON_TEXT = "https://gateway-a.watsonplatform.net/calls/url/URLGetText?url="
 WATSON_INFO = "/&outputMode=json&extract=title,author=1&maxRetrieve=3&"
 WATSON_CLOSING = "&outputMode=json&extract&apikey="


# makes API request and stores each response into variable
 def self.watson_call(url) #url from user input
   @opened_uri, @datum, @response = {}, {}, {}
   datum = Datumbox.create(ENV['DATUM_KEY'])

   data = WATSON_DATA + url + WATSON_CLOSING + ENV['WATSON_KEY']
   text = WATSON_TEXT + url + WATSON_CLOSING + ENV['WATSON_KEY']
   info = WATSON_DATA + url + WATSON_INFO + WATSON_CLOSING + ENV['WATSON_KEY']

   # API calls
   @opened_uri[:data] = JSON.parse(open(data, 'Accept-Encoding' => '') {|f| f.read })
   @opened_uri[:text] = JSON.parse(open(text, 'Accept-Encoding' => '') {|f| f.read })
   @opened_uri[:info] = JSON.parse(open(info, 'Accept-Encoding' => '') {|f| f.read })
   @datum['sentiment'] = JSON.parse(datum.sentiment_analysis(text: @opened_uri[:text]['text']))
   @datum['subjectivity'] = JSON.parse(datum.subjectivity_analysis(text: @opened_uri[:text]['text']))

   stage_render # method call to grab only necessary data from calls
   @response # final output to controller
 end

 private

# grabs needed data from API responses
 def self.stage_render
   @response['text'] = @opened_uri[:text]['text'] # article body
   @response['title'] = @opened_uri[:info]['title']
   @response['author'] = author_check(@opened_uri[:info]['author'])
   @response['taxonomy'] = @opened_uri[:data]['taxonomy'] # topics of article
   @response['sentiment'] = @datum['sentiment']['output']['result'] #sentiment from response
   @response['subjectivity'] = @datum['subjectivity']['output']['result'] #subjectivity from response
   @response['concepts'] = keep_relevant_concepts(@opened_uri[:data]['concepts'])
   @response['entities'] = keep_relevant_entities(@opened_uri[:data]['entities'])
   @response['keywords'] = keep_relevant_keywords(@opened_uri[:data]['keywords'])
 end

# keeps concepts if their relevance is above 80%, unless that results in keeping
# two or less concepts. Then it grabs the first three
 def self.keep_relevant_concepts(result)
   backup = result
   result.keep_if do |r|
     r['relevance'].to_f >= 0.8
   end
   return backup[0..2] if result.length < 3
 end

 # keeps entities if their relevance is above 70%, unless that results in keeping
 # two or less entities. Then it grabs the first three
 def self.keep_relevant_entities(result)
   backup = result
   result.keep_if do |r|
     r['relevance'].to_f >= 0.7
   end
   return backup[0..2] if result.length < 3
 end

 # keeps keywords if their relevance is above 60%
 def self.keep_relevant_keywords(result)
   result.keep_if do |r|
     r['relevance'].to_f >= 0.6
   end
 end

# if no author is listed it gives default value
 def self.author_check(input)
   if input.include?('Name')
     'No author is listed'
   elsif input.empty?
     'No author is listed'
   else
     input
   end
 end

end
