# == Schema Information
#
# Table name: subscriptions
#
#  id         :integer          not null, primary key
#  blog_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ActiveRecord::Base
  validates :blog_id, :user_id, presence: true

  belongs_to :blog

  belongs_to :user
end
