Stumplr.Views.SearchResultItemView = Backbone.CompositeView.extend({
  template: JST['searches/item'],



  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    var renderedContent = this.template({
      blog: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});
