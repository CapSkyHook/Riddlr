class AddPostsCountToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :posts_count, :integer
  end
end
