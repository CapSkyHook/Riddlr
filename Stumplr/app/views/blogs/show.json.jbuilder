json.extract! @blog, :id, :title, :created_at, :updated_at


json.lists @blog.posts do |post|
  json.extract! post, :id, :title, :user_id, :blog_id, :body, :content_type, :updated_at
end
