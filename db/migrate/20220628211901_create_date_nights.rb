class CreateDateNights < ActiveRecord::Migration[7.0]
  def change
    create_table :date_nights do |t|
      t.integer :couple_id
      t.integer :event_id
      t.boolean :has_been

      t.timestamps
    end
  end
end
