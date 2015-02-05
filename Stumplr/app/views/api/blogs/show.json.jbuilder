json.extract! @blog, :id, :title, :created_at, :updated_at


json.posts @blog.posts do |post|
  json.extract! post, :id, :title, :user_id, :blog_id, :body, :filepicker_url, :content_type, :updated_at
end
