class Event < ApplicationRecord
  has_many :date_nights
  has_many :reviews
  has_many :couples, through: :date_nights

  validates :event_type, inclusion: { in: %w(restaurant class entertainment leisure sport), 
                                message: "%{value} is not a valid type" }
  def self.get_random_event
    count = Event.all.count
    num = rand(1..count)
    Event.find(num)
  end
end
