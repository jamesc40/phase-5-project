class Couple < ApplicationRecord
  has_one_attached :image
  has_many :users

  has_many :date_nights
  has_many :events, through: :date_nights
  has_many :reviews, through: :date_nights

  validates :name, uniqueness: true

  def completed_dates
    date_nights.where(has_been: true).count
  end

  def interested_dates
    date_nights.where(is_interested: true)  
  end

  def leaderboard_position
    Couple.leaderboard.find_index(self) + 1 
  end

  def self.leaderboard
    Couple.all.sort_by { |couple| couple.completed_dates }.reverse 
  end

end
