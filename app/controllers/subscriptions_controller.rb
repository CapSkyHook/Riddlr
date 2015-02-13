class SubscriptionsController < ApplicationController
  def create
    @subscription = current_user.subscriptions.new(subscription_params)

    if @subscription.save
      render json: @subscription
    else
      render json: @subscription.errors.full_messages, status: :unprocessable_entity
    end
  end
  def destroy
    @subscription = Subscription.find(params[:id])
    @subscription.destroy
    render json: {}
  end

  def index
    @subscriptions = current_user.subscribed_blogs
    render json: @subscriptions
  end

  private

  def subscription_params
    params.require(:subscription).permit(:user_id, :blog_id)
  end
end
