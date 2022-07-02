class DateNightsController < ApplicationController
  def create
    date_night = current_couple.date_nights.create!(event_id: params[:event_id], has_been: false)  
    render json: date_night, status: :created
  end
end
