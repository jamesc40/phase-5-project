class Event < ApplicationRecord
  has_many :date_nights
  has_many :reviews
  has_many :couples, through: :date_nights

  validates :event_type, inclusion: { in: %w(restaurant class entertainment leisure sport), 
                                message: "%{value} is not a valid type" }

  def self.get_events(id)
    events = Event.all.filter do |event| 
      event.date_nights.all? do |date| 
        date.couple_id != id
      end
    end
  end

  def average_rating
    reviews.average(:rating)
  end
end
