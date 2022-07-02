class CouplesController < ApplicationController

  def show
    if current_couple 
      render json: current_couple, include: ['date_nights.event']
    else
      head :unauthorized
    end
  end

end
