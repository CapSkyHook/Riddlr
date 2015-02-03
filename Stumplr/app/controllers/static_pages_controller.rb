class StaticPagesController < ApplicationController
  def index
    redirect_to new_session_url unless signed_in?
  end
end
