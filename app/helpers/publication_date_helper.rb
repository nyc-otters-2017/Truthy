module PublicationDateHelper
  require 'date'

  def self.convert_date(publication_date)
    if publication_date.length > 0
      Date.strptime(publication_date, "%Y%m%d")
    else
      'No date is listed'
    end
  end
end
