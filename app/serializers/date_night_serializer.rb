class DateNightSerializer < ActiveModel::Serializer
  attributes :id, :has_been

  belongs_to :event
end
