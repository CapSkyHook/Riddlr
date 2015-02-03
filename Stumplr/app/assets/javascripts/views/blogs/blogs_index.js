Stumplr.Views.BlogsIndex = Backbone.CompositeView.extend({
  template: JST['blogs/index'],

  className: 'blogs-Index',

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addBlogSubview);
    this.listenTo(this.collection, 'sync add', this.render);
    var view = this;
    this.collection.each(function (blog) {
      view.addBlogSubview(blog);
    });
  },

  addBlogSubview: function (blog) {
    var blogListItem = new Stumplr.Views.BlogListItem({
      model: blog
    });
    
    this.addSubview("ul.blogs-index", blogListItem);
  },

  // events: {
  //   'click .add-button': 'addBlog'
  // },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  // addBlog: function (event) {
  //   event.preventDefault();
  //   var newUrl = this.$('input').val();
  //   var newBlog = new Stumplr.Models.Blog({
  //     'url': newUrl
  //   });
  //
  //   newBlog.save({}, {
  //     success: function () {
  //       this.collection.add(newBlog);
  //     }.bind(this)
  //   });
  // }
});
