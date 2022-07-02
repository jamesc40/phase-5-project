class Couple < ApplicationRecord
  has_one_attached :image
  has_many :users

  has_many :date_nights
  has_many :events, through: :date_nights
  has_many :reviews, through: :date_nights

  def completed_dates
    date_nights.where(has_been: true).count
  end
end
