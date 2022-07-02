class CoupleSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :image, :completed_dates

  has_many :date_nights
  #has_many :events

  def image 
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

end
