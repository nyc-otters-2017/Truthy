class Analysis < ApplicationRecord

  def self.watson_call(params)
  service = WatsonAPIClient::AlchemyLanguage.new(:apikey=>ENV['WATSON_KEY'],
                                                 :verify_ssl=>OpenSSL::SSL::VERIFY_NONE)
  @watson_call = service.URLGetCombinedData('model'      => 'en-news',
                                      'extract'    => 'authors, doc-emotion, entities, keywords, doc-sentiment, taxonomy, title',
                                      'url'        => params['url'],
                                      'outputMode' => 'json')
  debugger
  end


  response = service.URLGetTypedRelations('model'      => 'en-news','url'        => 'www.cnn.com', 'outputMode' => 'json')

end
