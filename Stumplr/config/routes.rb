Rails.application.routes.draw do
  root to: 'static_pages#index'
  resources :users

  resource :session

    resources :blogs do
      resources :posts, only: [:new, :index, :create, :edit, :delete]
    end
    resources :posts, only: [:show]

end
