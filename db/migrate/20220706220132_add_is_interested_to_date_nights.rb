class AddIsInterestedToDateNights < ActiveRecord::Migration[7.0]
  def change
    add_column :date_nights, :is_interested, :boolean, default: true
  end
end
