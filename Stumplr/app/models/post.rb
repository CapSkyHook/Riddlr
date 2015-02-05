# == Schema Information
#
# Table name: posts
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  blog_id        :integer          not null
#  title          :string           not null
#  body           :text             not null
#  content_type   :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  filepicker_url :string
#

class Post < ActiveRecord::Base
  validates :user_id, :blog_id, :title, presence: true

  belongs_to :user
  belongs_to :blog
end
