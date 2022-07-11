class DateNight < ApplicationRecord
  belongs_to :couple
  belongs_to :event
  
  has_one :review

  validates :couple_id, uniqueness: { scope: :event_id }

end
