# == Schema Information
#
# Table name: blogs
#
#  id            :integer          not null, primary key
#  title         :string           not null
#  owner_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  profile_image :string
#

require 'test_helper'

class BlogTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
