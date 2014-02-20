class TodosController < ApplicationController
  def index
    @todos = Todo.all.sort
    respond_to do |f|
      f.html
      f.json { render :json => @todos, only: [:id, :title, :completed]}
    end
  end

  def create
    todo_params = params.require(:todo).permit(:title, :completed)
    @todo = Todo.create(todo_params)

    respond_to do |f|
      f.json { render :json => @todo, only: [:id, :title, :completed] }
    end
  end

  # Fill in destroy
  def destroy
    id = params[:id]
    @todos = Todo.find(id)
    @todos.destroy
    respond_to do |f|
      f.json {render :json => {:status => 200} }
    end
  end

  # Fill in update
  def update
    id = params[:id]
    @todos = Todo.find(id)
    todos_update = params.require(:todo).permit(:completed)
    # binding.pry
    @todos.update_attributes(todos_update)
    respond_to do |f|
      f.json {render :json => @todos, :status => 200 }
    end
  end
end
