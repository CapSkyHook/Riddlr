
json.array! @blogs do |blog|
  json.extract! blog, :id, :title, :updated_at

  json.posts blog.posts do |post|
    json.extract! post, :id, :blog_id, :user_id, :title, :body, :content_type, :filepicker_url
  end
end
