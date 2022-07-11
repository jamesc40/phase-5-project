class SessionsController < ApplicationController

  skip_before_action :authorize, only: [:login]

  def login
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      session[:couple_id] = user.couple.id
      render json: user.couple
    else
      render json: { error: 'wrong username or password' }, status: :unauthorized
    end
  
  end

  def logout
    session.delete :couple_id, :user_id
    head :no_content
  end

end
