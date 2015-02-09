Stumplr.Views.FeedView = Backbone.CompositeView.extend({
  feedTemplate: JST['feeds/index'],


  className: 'feed-view',



  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPost);
  },


  render: function () {
    var renderedContent = this.feedTemplate({
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
