class DateNight < ApplicationRecord
  belongs_to :couple
  belongs_to :event
  
  has_one :review
end
