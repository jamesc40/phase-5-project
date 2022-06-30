class Couple < ApplicationRecord
  has_many :users

  has_many :date_nights
  has_many :events, through: :date_nights
  has_many :reviews, through: :date_nights
end
