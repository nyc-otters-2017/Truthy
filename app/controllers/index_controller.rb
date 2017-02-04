class IndexController < ApplicationController

  def index
  end

  def analyze
    # @watson_stuff
    # @reverse_image_info
    @blacklist = BlacklistHelper.check_domain(params[:urlString])
    @fullcontact = BlacklistHelper.request(params[:urlString])
    session[:url] = params[:urlString]
    redirect_to "/results"
  end

  def result
    @blacklist = BlacklistHelper.check_domain(session[:url])
    @fullcontact = BlacklistHelper.request(session[:url])
    render :result, layout: false
  end

  private

  def index_params
    params.require(:index).permit(:url)
  end

end
