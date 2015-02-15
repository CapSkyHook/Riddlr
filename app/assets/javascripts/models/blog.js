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
      this._subscription = new Stumplr.Models.Subscription({blog_id: this.id});
    }

    return this._subscription;
  },

  updateCount: function (attr, diff){
    var old_count = this.get(attr);
    this.set(attr, old_count + diff)
  },

  updatePostsCount: function(diff){
    this.updateCount('posts_count', diff)
  },

  addPost: function(){
    this.updatePostsCount(1);
  },

  deletePost: function(){
    this.updatePostsCount(-1);
  },

  updateSubscriptionCount: function(diff){
    this.updateCount('subscriptions_count', diff)
  },

  subscribe: function(){
    var that = this;
    this.subscription().save({}, {success: function(){
      Stumplr.Collections.subscribedBlogs.add(that);
      that.updateSubscriptionCount(1);
    }});
  },

  unsubscribe: function(){
    var that = this;
    this.subscription().destroy({
      success: function(){
        delete that._subscription;
        Stumplr.Collections.subscribedBlogs.remove(that);
        that.updateSubscriptionCount(-1);
      }
    });

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
