json.array! @posts do |post|

  json.extract! post, :user_id, :blog_id, :title, :body, :content_type, :created_at, :updated_at, :filepicker_url, :blog_picture_url
  json.likes_count post.likes_count || 0
  if current_user.liked_posts.include?(post)
    like = current_user.likes.where({ post_id: post.id })

    json.like like[0]
  end
end
