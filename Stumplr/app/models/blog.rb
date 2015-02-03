# == Schema Information
#
# Table name: blogs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Blog < ActiveRecord::Base

  validates :title, :owner_id, presence: true

  belongs_to(:user,
            class_name: "User",
            foreign_key: :owner_id)  
end
