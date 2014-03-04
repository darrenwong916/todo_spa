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
      this.$el.append(todoHTML.render().el);
    }, this);

    return this;
  },



  add: function(event){
    event.preventDefault();
    var newTodo = {
       title: $("#todo_title").val(),
       completed: false
      };

    console.log(newTodo);  

    $.ajax({
        type: 'post',
        url: '/todos',
        context: this,
        data: { todo: newTodo }
      })
        .done(function(data) {
        var todoView = new SpaApp.Views.TodosShow({ model: data});
        this.$el.append(todoView.render().el);
    
     return this;
      });
  }

});



