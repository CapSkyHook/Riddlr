Stumplr.Routers.Router = Backbone.Router.extend({
  initialize: function (){

    this.$rootEl = $('#content');
    this.$sideEl = $('#sidebar');

  },

  routes: {
    "": "feedView",
    "blogs/:id": "blogsShow",
    "search/:search_term": "search"
  },

  feedView: function () {
    var posts = new Stumplr.Collections.Posts();
    posts.fetch();
    var indexView = new Stumplr.Views.FeedView({
      collection: posts
    });

    this._swapView(indexView);
  },

  search: function (search_term) {

  },

  blogsShow: function (id) {

    var blog = Stumplr.Collections.blogs.getOrFetch(id);
    var view = new Stumplr.Views.BlogShow({
      model: blog
    });

    this._swapView(view);

  },

  sidebarView: function () {
    var ownedBlogs = new Stumplr.Collections.Blogs();
    ownedBlogs.fetch();
    var sidebarView = new Stumplr.Views.SidebarView({
      collection: ownedBlogs,
      $rootEl: this.$rootEl
    });

    this.$sideEl.html(sidebarView.render().$el)
  },


  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
    this.sidebarView();
  }

});
