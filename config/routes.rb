Rails.application.routes.draw do
  root "home#index"

  resources :url, only: %i[index create update show]

  get "*path", to: "home#index", via: :all
end
