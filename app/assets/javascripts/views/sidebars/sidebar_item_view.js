Stumplr.Views.SidebarItemView = Backbone.CompositeView.extend({
  template: JST['sidebars/item'],



  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.collection, "add", this.render)
  },

  render: function () {
    var renderedContent = this.template({
      blog: this.model,
      posts: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }
});
