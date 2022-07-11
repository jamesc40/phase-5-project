class DateNightsController < ApplicationController

  def index
    render json: current_couple.interested_dates
  end

  def create
    date_night = current_couple.date_nights.create!(date_night_params)
    head :created
  end

  def update
    date_night = DateNight.find(params[:id])
    date_night.update!(has_been: true)
    render json: current_couple.leaderboard_position, status: :accepted
  end

  def destroy 
    date_night = DateNight.find(params[:id])
    date_night.destroy
    head :no_content
  end

  private

  def date_night_params
    params.permit(:event_id, :has_been, :is_interested)
  end

end
