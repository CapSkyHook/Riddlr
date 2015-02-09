Stumplr.Views.LinkView = Backbone.View.extend({
  template: JST['links/item'],



  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    var renderedContent = this.template({
      link: this.model
    });
    this.$el.html(renderedContent);

    return this;
  }
});
