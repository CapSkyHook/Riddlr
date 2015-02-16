class AddBackgroundImageToBlog < ActiveRecord::Migration
  def change
    add_column :blogs, :background_image, :string
  end
end
