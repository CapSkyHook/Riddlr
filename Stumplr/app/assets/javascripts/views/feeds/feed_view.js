Stumplr.Views.FeedView = Backbone.CompositeView.extend({
  Template: JST['feeds/index'],


  className: 'feed-view',

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPost);
  },


  render: function () {
    var renderedContent = this.Template({
      blog: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },


  addPost: function (post) {
    var view = new Stumplr.Views.PostShow({
      model: post
    });
    this.addSubview('#feed-list', view);
  }
});
