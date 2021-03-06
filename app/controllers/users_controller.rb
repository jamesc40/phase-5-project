class UsersController < ApplicationController

  skip_before_action :authorize, only: [:create]

  def create
    couple = Couple.find_by(name: params[:name]) || 
      Couple.create!(couple_params)

    user = couple.users.create!(user_params) 
    session[:user_id] = user.id
    session[:couple_id] = user.couple.id
    render json: user.couple
  end

  def message
    message = params[:message]
    if message
      other_user = current_user.get_other_user   
      if other_user
        other_user.update!(message: message) 
        head :accepted
      end
    else
      current_user.update!(message: message)
      head :no_content
    end

  end

  private
  
  def user_params
    params.permit(:email, :password)
  end

  def couple_params
    params.permit(:name, :image)
  end

#  def message_params
    #params.permit(:message)
  #end

end
