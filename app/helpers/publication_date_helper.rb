module PublicationDateHelper
  require 'date'

  def convert_date(publication_date)
    date = Date.strptime(publication_date, "%Y%m%d")
  end
end
