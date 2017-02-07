module AylienHelper

  DEFAULT_IMAGE = 'http://english.tw/wp-content/themes/qaengine/img/default-thumbnail.jpg'

  def stage_aylien(data)
    @keyword = data['keywords'].first['text']
    entities = data['concepts'].select {|h| h.has_key?('dbpedia')}
    @entities = data['concepts'].map {|h| h['dbpedia']}
  end

  def self.aylien_call(keyword, entities)
    AylienNewsApi.configure do |config|
      # Configure API key authorization: app_id
      config.api_key['X-AYLIEN-NewsAPI-Application-ID'] = ENV['AYLIEN_APP']

      # Configure API key authorization: app_key
      config.api_key['X-AYLIEN-NewsAPI-Application-Key'] = ENV['AYLIEN_KEY']
    end

    api_instance = AylienNewsApi::DefaultApi.new

    opts = {
      :title => keyword,
      :published_at_start => "NOW-7DAYS",
      :published_at_end => "NOW",
      :entities_body_links_dbpedia => entities,
      :language => ['en'],
      :sort_by => 'social_shares_count.facebook'
    }

      #List stories
      result = api_instance.list_stories(opts)
      output = result.stories.map do |story|
        related = {}
        related['author'] = story.author.name || 'Anonymous'
        related['link'] = story.links.permalink
        related['title'] = story.title
        related['body'] = story.body[0..200]+'...' || 'preview unavailable'
        related['source'] = story.source.title.first
        if story.media.empty?
          related['media'] = DEFAULT_IMAGE
        else
          related['media'] = eval(story.media[0].to_s).fetch(:url, DEFAULT_IMAGE)
        end
        related
      end
  end
end
