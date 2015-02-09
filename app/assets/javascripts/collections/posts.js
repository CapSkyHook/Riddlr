Stumplr.Collections.Posts = Backbone.Collection.extend({
  model: Stumplr.Models.Post,
  
  url: '/posts',

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
