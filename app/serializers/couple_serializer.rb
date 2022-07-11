class CoupleSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :image, :completed_dates, :leaderboard_position

  #has_many :date_nights

  def image 
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

  #def interested_dates_stuff
    #object.interested_dates.map do |date|
      #{ id: date.id, }
  #end

end
