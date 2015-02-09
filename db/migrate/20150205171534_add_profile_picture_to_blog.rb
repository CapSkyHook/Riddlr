class AddProfilePictureToBlog < ActiveRecord::Migration
  def change
    add_column :blogs, :profile_image, :string

  end
end
