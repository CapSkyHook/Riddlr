Rails.application.routes.draw do
  root to: 'static_pages#index'
  resources :users

  resource :session
  resources :blogs, only: [:new, :create]
  resources :posts
  resources :subscriptions, only: [:create, :destroy, :index]

  namespace :api, defaults: { format: :json } do
    resources :blogs
    resources :recommendations, only: [:index]
  end

end
