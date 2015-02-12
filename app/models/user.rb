# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  gravatar_url    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  phone_number    :string
#

class User < ActiveRecord::Base
  before_validation :ensure_session_token
  validates :email, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 5, allow_nil: true}


  has_many(:blogs,
    class_name: "Blog",
    foreign_key: :owner_id)
  has_many :posts
  has_many :subscriptions
  has_many :subscribed_blogs, through: :subscriptions, source: :blog
  # has_many :likes

  attr_reader :password

  def self.find_by_credentials(user_params)
    user = User.find_by_email(user_params[:email])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def purchase_num=(val)

    if val == "true"
      account_sid = ENV["twilio_account_id"]
      auth_token = ENV["twilio_auth_token"]
      @client = Twilio::REST::Client.new account_sid, auth_token

      @numbers = @client.account.available_phone_numbers.get('US').local.list(:area_code => "510")

      # Purchase the number
      @number = @numbers[0]
      incoming_number = @client.account.incoming_phone_numbers.create(
        phone_number: @number.phone_number,
        sms_url: "https://stumplr.herokuapp.com/api/posts",
        sms_method: 'POST'
      )
      self.phone_number = incoming_number.phone_number
    end
  end

  protected

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
