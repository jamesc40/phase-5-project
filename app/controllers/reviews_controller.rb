class ReviewsController < ApplicationController

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:content, :rating, :date_night_id, :event_id)
  end

end
