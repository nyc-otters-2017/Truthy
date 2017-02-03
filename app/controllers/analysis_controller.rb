class AnalysisController < ApplicationController

  def comprehend
    render json: watson_call(analysis_params)
  end

  def output
  end

  private

  def analysis_params
    params.require(:analysis).permit(:url)
  end

end
