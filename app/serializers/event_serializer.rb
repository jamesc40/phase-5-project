class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :event_type, :description, :website, :image
end
