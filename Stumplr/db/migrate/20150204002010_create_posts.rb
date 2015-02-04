class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.integer :blog_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.timestamps null: false
    end
    add_index :posts, :title
    add_index :posts, :body
  end
end
