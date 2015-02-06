Stumplr.Routers.Router = Backbone.Router.extend({
  initialize: function (){

    this.$rootEl = $('#content');
    this.$sideEl = $('#sidebar');

  },

  routes: {
    "": "feedView",
    "blogs/:id": "blogsShow"
  },

  feedView: function () {
    var posts = new Stumplr.Collections.Posts();
    posts.fetch();
    var indexView = new Stumplr.Views.FeedView({
      collection: posts
    });

    this._swapView(indexView);

  },

  blogsShow: function (id) {
    var blog = Stumplr.Collections.blogs.getOrFetch(id);
    var view = new Stumplr.Views.BlogShow({
      model: blog
    });

    this._swapView(view);
  },


  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
