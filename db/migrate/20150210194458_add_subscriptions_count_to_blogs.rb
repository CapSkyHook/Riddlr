class AddSubscriptionsCountToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :subscriptions_count, :integer
  end
end
