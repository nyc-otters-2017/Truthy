class AnalysisController < ApplicationController

  def comprehend
    Analysis.watson_call(analysis_params)
    render json: @watson_call
  end

  def output
  end

  private

  def analysis_params
    params.require(:analysis).permit(:url)
  end

end
