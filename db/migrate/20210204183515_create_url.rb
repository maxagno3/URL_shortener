class CreateUrl < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :url
      t.string :slug
      t.integer :count, default: 0

      t.timestamps
    end
  end
end
