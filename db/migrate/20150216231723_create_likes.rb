class CreateLikes < ActiveRecord::Migration
  def change
    drop_table :likes

    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false

      t.timestamps null: false
    end
  end
end
