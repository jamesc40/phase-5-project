class LeaderboardSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :name, :image, :completed_dates, :leaderboard_position

  def image 
    if object.image.attached?
      rails_blob_path(object.image, only_path: true) 
    else
      image = Faker::LoremFlickr.image(search_terms: ['couple'])
    end
  end

end
