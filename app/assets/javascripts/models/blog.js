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

  updateSubscriptionCount: function(diff){
    var old_count = this.get('subscriptions_count');
    this.set('subscriptions_count', old_count + diff);
  },

  subscribe: function(){
    var that = this;
    this.subscription().save({}, {success: function(){
      that.updateSubscriptionCount(1);
    }});
  },

  unsubscribe: function(){
    var that = this;
    this.subscription().destroy({
      success: function(){
        delete that._subscription;
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
