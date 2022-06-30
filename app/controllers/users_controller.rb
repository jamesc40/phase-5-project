class UsersController < ApplicationController
  def create
    couple = Couple.find_by(name: params[:couple_name])  
    user = if couple 
            couple.users.create!(user_params) 
           else 
             couple = Couple.create!(name: params[:couple_name]) unless couple
             couple.users.create!(user_params) 
           end
    
    session[:couple_id] = user.couple.id
    render json: user.couple
  end

  private

  def user_params
    params.permit(:email, :username, :password, :first_name, :last_name)
  end
end
