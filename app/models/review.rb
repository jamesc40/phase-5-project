class Review < ApplicationRecord
  belongs_to :date_night
  belongs_to :event

  validates :date_night_id, uniqueness: true
  #validates :rating, presence: true, message: "#{rating} must be included"
end
