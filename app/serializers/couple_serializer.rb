class CoupleSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :image, :completed_dates, :leaderboard_position, :user_message

  def image 
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

  def user_message
    current_user.message 
  end

end
