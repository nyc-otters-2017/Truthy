class IndexController < ApplicationController

  def index
  end

  private

  def index_params
    params.require(:index).permit(:url)
  end

end
