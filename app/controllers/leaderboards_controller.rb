class LeaderboardsController < ApplicationController
  def index
    leaderboard = Couple.leaderboard
    render json: leaderboard, each_serializer: LeaderboardSerializer
  end
end
