class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_res
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_res

  before_action :authorize


  def current_couple
    Couple.find_by(id: session[:couple_id])
  end
  
  private

  def authorize
    unless current_couple
      head :unauthorized
    end
  end

  def record_invalid_res(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
  end

  def not_found_res(invalid)
    render json: { errors: invalid }, status: :not_found
  end
end
