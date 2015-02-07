json.extract! @blog, :id, :title, :owner_id, :created_at, :updated_at

if current_user.subscribed_blogs.include?(@blog)
  subscription = current_user.subscriptions.where({ blog_id: @blog.id })

  json.subscription subscription[0]
end


json.posts @blog.posts do |post|
  json.extract! post, :id, :title, :user_id, :blog_id, :body, :filepicker_url, :content_type, :updated_at
end
