class AnalysisController < ApplicationController

  def comprehend
  end

  def output
  end

  private

  def analysis_params
    params.require(:analysis).permit(:url)
  end

end
