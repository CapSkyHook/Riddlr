class AddPictureColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :blog_picture_url, :string
  end
end
