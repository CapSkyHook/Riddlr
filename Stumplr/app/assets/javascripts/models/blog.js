Stumplr.Models.Blog = Backbone.Model.extend({
  urlRoot: 'blogs',

  posts: function () {
    if (!this._posts) {
      this._posts = new TrelloClone.Collections.Posts([], { blog: this });
    }

    return this._posts;
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }

    return response;
  }
});
