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

class Blog < ActiveRecord::Base

  validates :title, :owner_id, presence: true

  belongs_to(:user,
            class_name: "User",
            foreign_key: :owner_id)
  has_many :posts
  has_many :subscriptions


  def self.search(search_term)
    search_terms = search_term.split(" ")
    search_results = []
    search_terms.each do |search_term|
      if search_term.include?("+")
        search_term.gsub!(/[+]/, ' ')
        search_results << Blog.where("LOWER(title) ~ lower(?)", search_term)
        p search_results
      else
        search_results << Blog.where("LOWER(title) ~ lower(?)", search_term)
      end
    end
    final_results = search_results.flatten!.uniq..order(:created_at)
    return search_results
  end
end
