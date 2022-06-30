class SessionsController < ApplicationController

  def login
    user = User.find_by(username: params[:username])

    if user&.authenticate(params[:password])
      session[:couple_id] = user.couple.id
      render json: user.couple
    else
      render json: { error: 'wrong username or password' }, status: :unauthorized
    end
  
  end

end