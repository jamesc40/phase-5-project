class CouplesController < ApplicationController

  def show
    render json: current_couple
  end

end
