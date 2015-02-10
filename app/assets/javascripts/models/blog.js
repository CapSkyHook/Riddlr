Stumplr.Models.Blog = Backbone.Model.extend({
  urlRoot: 'api/blogs',

  posts: function () {
    if (!this._posts) {
      this._posts = new Stumplr.Collections.Posts([], { blog: this });
    }
    return this._posts;
  },

  subscription: function () {
    if (!this._subscription) {
      this._subscription = new Stumplr.Models.Subscription();
    }

    return this._subscription;
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }
    this.subscription().set({blog_id: response.id});

    if (response.subscription) {
      this.subscription().set(response.subscription, { parse: true });
      delete response.subscription;
    }


    return response;
  }
});
