class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :event_type
      t.boolean :indoor
      t.text :description
      t.text :website
      t.text :image

      t.timestamps
    end
  end
end
