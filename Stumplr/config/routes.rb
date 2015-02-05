Rails.application.routes.draw do
  root to: 'static_pages#index'
  resources :users

  resource :session

  resources :blogs
  resources :posts

end
