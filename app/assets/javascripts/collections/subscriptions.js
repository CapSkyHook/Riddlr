Stumplr.Collections.Subscriptions = Backbone.Collection.extend({
  model: Stumplr.Models.Subscription,

  url: "/subscriptions",

  getOrFetch: function (id) {
    var post = this.get(id);

    if (!blog) {
      post = new Stumplr.Models.Post({ id: id });
      post.fetch({
        success: function () {
          this.add(post);
        }.bind(this)
      });
    } else {
      post.fetch();
    }

    return post;
  }
});
