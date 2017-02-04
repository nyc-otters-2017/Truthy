class IndexController < ApplicationController

  def index
  end

  def analyze
    # @watson_stuff
    # @reverse_image_info
    session[:url] = params[:urlString]
    redirect_to "/results"
  end

  def result
    @watson = Analysis.watson_call(session[:url])
    @blacklist = BlacklistHelper.check_domain(session[:url])
    @fullcontact = BlacklistHelper.request(session[:url])
    render :result
  end

  private

  def index_params
    params.require(:index).permit(:url)
  end

end
