class IndexController < ApplicationController

  def index
  end

  def analyze
    # @watson_stuff
    # @reverse_image_info
    @blacklist = BlacklistHelper.check_domain(params[:urlString]).to_json
    render :result, layout: false
  end

  private

  def index_params
    params.require(:index).permit(:url)
  end

end
