class DateNightSerializer < ActiveModel::Serializer
  attributes :id, :couple_id, :has_been, :is_interested

  belongs_to :event
  has_one :review

end
