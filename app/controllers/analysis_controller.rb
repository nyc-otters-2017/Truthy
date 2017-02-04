class AnalysisController < ApplicationController

  def comprehend
    x = Analysis.watson_call(analysis_params)
    render json: x
  end

  def output
  end

  private

  def analysis_params
    params.require(:analysis).permit(:url)
  end

end
