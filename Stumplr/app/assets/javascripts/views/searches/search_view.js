Stumplr.Views.SearchResultView = Backbone.CompositeView.extend({
  template: JST['searches/index'],


  className: 'search-view',



  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addBlog);
    this.collection.each(this.addBlog.bind(this));
  },


  render: function () {
    var renderedContent = this.template({
      results: this.collection
    });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },


  addBlog: function (blog) {
    var view = new Stumplr.Views.SearchViewItem({
      model: blog
    });
    this.addSubview('#search-view-list', view);
  }
});
