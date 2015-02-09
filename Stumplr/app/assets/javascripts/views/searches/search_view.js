Stumplr.Views.SearchResultView = Backbone.CompositeView.extend({
  template: JST['searches/index'],


  className: 'search-view',



  initialize: function () {
    this.listenTo(this.collection, 'add', this.addBlog);
  },


  render: function () {
    var renderedContent = this.template({
    });
    this.$el.html(renderedContent);
    return this;
  },


  addBlog: function (blog) {
    var posts = blog.posts();
    posts.fetch();

    var view = new Stumplr.Views.SearchViewItem({
      model: blog,
      collection: posts
    });
    this.addSubview('#search-view-list', view);
  }
});
