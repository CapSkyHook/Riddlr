Stumplr.Routers.Router = Backbone.Router.extend({
  initialize: function (){

    this.$rootEl = $('#content')

  },

  routes: {
    "": "blogsIndex",
    "blogs/:id": "blogsShow",
    "blogs/new": "blogsCreate"

  },

  blogsIndex: function () {
    Stumplr.Collections.blogs.fetch();
    var view = new Stumplr.Views.BlogsIndex({
      collection: Stumplr.Collections.blogs
    });

    this._swapView(view);

  },

  blogsShow: function (id) {
    var board = Stumplr.Collections.blogs.getOrFetch(id);

    var view = new Stumplr.Views.BoardShow({
      model: board
    });

    this._swapView(view);
  },

  blogsCreate: function () {

  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
