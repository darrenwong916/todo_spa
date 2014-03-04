SpaApp.Views.TodosShow = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/show'],

  events: {
        "click #removeTodo": "deleteOnClick"
  },

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var todoHTML = HandlebarsTemplates['todos/show'](someTodo);
      this.$el.append(todoHTML);
    }, this);

    return this;
  },

    delete: function(event) {
    event.preventDefault();
    var _this = this;
    console.log(this.model);
    var getTodo = this.model;
    console.log(getTodo);
  }

});
