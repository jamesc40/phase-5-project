class SessionsController < ApplicationController

  def login
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      session[:couple_id] = user.couple.id
      render json: user.couple
    else
      render json: { error: 'wrong username or password' }, status: :unauthorized
    end
  
  end

  def logout
    session.delete :couple_id
    head :no_content
  end

end
