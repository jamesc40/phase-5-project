class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :date_night_id
      t.integer :event_id
      t.float :rating
      t.text :content

      t.timestamps
    end
  end
end
