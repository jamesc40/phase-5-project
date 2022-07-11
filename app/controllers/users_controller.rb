class UsersController < ApplicationController

  skip_before_action :authorize, only: [:create]

  def create
    couple = Couple.find_by(name: params[:name]) || 
      Couple.create!(couple_params)

    user = couple.users.create!(user_params) 
    session[:couple_id] = user.couple.id
    render json: user.couple
  end

  private

  def user_params
    params.permit(:email, :password)
  end

  def couple_params
    params.permit(:name, :image)
  end
end
