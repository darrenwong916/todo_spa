SpaApp.Views.TodosShow = Backbone.View.extend({

  className: function() {
    if (this.model.completed) {
      return 'done done-true';
    } else {
      return 'done';
    }
    
  },

  template: HandlebarsTemplates['todos/show'],

  events: {
        "click #removeTodo": "delete",
        "click input[type='checkbox']" : "updateTodo"
  },

  render: function() {
    $(this.el).html(this.template(this.model));
    return this;
  },

  delete: function(event) {
    console.log(this.model);  
    var deleteID = this.model.id;
      $.ajax({
        type: 'delete',
        context: this,
        url: '/todos/' + deleteID
      })
        .done(function (data) {
           console.log(this);
          $(this.el).remove();
        });
  },

  updateTodo: function(event) {
    console.log(this.model);
     var  completedModel = this.model;
     completedModel.completed = !completedModel.completed;

     $.ajax({
          type: 'PATCH',
          context: this,
          url: '/todos/' + completedModel.id,
          data: { todo : completedModel }

     }).done(function(data) {
      $(this.el).toggleClass('done-true');
     });
  }

});
