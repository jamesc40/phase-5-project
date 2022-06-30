Rails.application.routes.draw do
  resources :couples, only: [:index]
  resources :users, only: [:create]
  resources :events, only: [:index, :show]
  resources :date_nights
  resources :reviews, only: [:create, :destroy]

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  get '/validate-couple', to: 'couples#show'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
