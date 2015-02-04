Stumplr.Collections.Blogs = Backbone.Collection.extend({
  model: Stumplr.Models.Blog,
  url: function () {'blogs/'+ this.get('blog_id') + '/posts'},

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
