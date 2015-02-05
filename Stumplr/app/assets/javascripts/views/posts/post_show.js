Stumplr.Views.PostShow = Backbone.CompositeView.extend({
  Template: JST['posts/show'],

  className: 'post-show',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    var renderedContent = this.Template({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }

})
