module Fullcontact

require 'net/http'
require 'uri'

  def self.request(domain_string)
    uri = URI.parse("https://api.fullcontact.com/v2/company/lookup.json?domain="+domain_string)
    request = Net::HTTP::Get.new(uri)
    request["X-Fullcontact-Apikey"] = "2cdecdbbf0be3679"

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end
    
  end

  binding.pry
end
