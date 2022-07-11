Rails.application.routes.draw do
  resources :couples, only: [:index]
  resources :users, only: [:create]
  resources :events, only: [:index]
  resources :date_nights, only: [:index, :create, :update, :destroy]
  resources :reviews, only: [:create, :destroy]
  resources :leaderboards, only: [:index]

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  get '/validate-couple', to: 'couples#show'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
