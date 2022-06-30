class CouplesController < ApplicationController

  def show
    if current_couple 
      render json: current_couple
    else
      head :unauthorized
    end
  end

end
