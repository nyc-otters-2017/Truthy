class IndexController < ApplicationController

  def index
  end

  def analyze
    puts params
  end

  private

  def index_params
    params.require(:index).permit(:url)
  end

end
