SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    "submit #addTodo": "add",
  },

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var todoHTML = new SpaApp.Views.TodosShow({model : someTodo});
      this.$el.append(todoHTML).el();
    }, this);

    return this;
  },



  add: function(event){
    event.preventDefault();
    var newTodo = {title: $("#todo_title").val(),
      completed: false};
    console.log(newTodo);  
    $.post('/todos.json', {todo: newTodo}).done(function(data) {
        var todoHTML = HandlebarsTemplates['todos/show'](data);
        $("#todos").append(todoHTML);
        $("#addTodo").val('');
      });
  }

});
