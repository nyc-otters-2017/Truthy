Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'index#index'
  post '/analyze' => 'index#analyze'
  get '/results' => 'index#result'
  post 'analysis/comprehend' => 'analysis#comprehend'
  get '/quotes' => 'index#quote'

end
