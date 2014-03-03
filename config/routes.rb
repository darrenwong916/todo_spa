SpaApp::Application.routes.draw do
  get "main/index"
  root to: 'main#index'
  get '/todos', to: 'todos#index', as: 'todos'
  post '/todos', to: 'todos#create'
<<<<<<< HEAD
  patch '/todos/:id', to: 'todos#update'
=======
  patch "/todos/:id", to: "todos#update"
>>>>>>> upstream/with_backbone
  delete '/todos/:id', to: 'todos#destroy'
end
