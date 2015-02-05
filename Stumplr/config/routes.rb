Rails.application.routes.draw do
  root to: 'static_pages#index'
  resources :users

  resource :session
  resources :blogs, only: [:new, :create, :show]
  resources :posts

  namespace :api do
    resources :blogs
  end

end
