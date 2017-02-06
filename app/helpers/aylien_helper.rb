module AylienHelper
  def self.aylien_call(title='donald trump', entities=[])
    AylienNewsApi.configure do |config|
      # Configure API key authorization: app_id
      config.api_key['X-AYLIEN-NewsAPI-Application-ID'] = ENV['AYLIEN_APP']

      # Configure API key authorization: app_key
      config.api_key['X-AYLIEN-NewsAPI-Application-Key'] = ENV['AYLIEN_KEY']
    end

    api_instance = AylienNewsApi::DefaultApi.new

    opts = {
      :title => title,
      :published_at_start => "NOW-7DAYS",
      :published_at_end => "NOW",
      :entities_body_links_dbpedia => entities,
      :language => ['en'],
      :sort_by => 'social_shares_count.facebook'
    }

      #List stories
      result = api_instance.list_stories(opts)
      result.stories.map do |story|
        {link: story.links.permalink,
         title: story.title,
         source: story.source.title,
         media: story.media
        }
      end
  end
end
