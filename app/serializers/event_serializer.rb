class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :event_type, :description, :website, :image, :average_rating, :intro

  has_many :reviews
end
