class AddHasBeenDefaultValue < ActiveRecord::Migration[7.0]
  def change
    change_column :date_nights, :has_been, :boolean, default: false
  end
end
