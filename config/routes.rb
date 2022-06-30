Rails.application.routes.draw do
  resources :couples
  resources :users, only: [:create]
  resources :events, only: [:index, :show]
  resources :date_nights
  resources :reviews, only: [:create, :destroy]

  post '/login', to: 'sessions#login'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
