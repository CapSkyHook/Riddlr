Stumplr.Routers.Router = Backbone.Router.extend({
  initialize: function (){

    this.$rootEl = $('#content')

  },

  routes: {
    "": "blogs/1",
    "blogs/:id": "blogsShow"
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
