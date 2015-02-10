Stumplr.Views.SubscribeButtonView = Backbone.View.extend({
  template: JST['buttons/subscribe'],

  subscribedTemplate: JST['buttons/subscribed'],

  events: {
    "click button.subscribe-button": "addSubscription",
    "click button.subscribed-button": "deleteSubscription"
  },

  // initialize: function (options) {
  //   this._blog_id = options.blog.id;
  //   this.blog = options.blog;
  // },

  render: function () {
    var subscription = this.model.subscription();
    this._subscribed = !subscription.isNew();

    var renderContent = this.template({
      subscribed: this._subscribed
    });

    this.$el.html(renderContent);
    return this;
  },

  addSubscription: function () {
    this.model.subscribe();
    // var that = this;
    // var subscription = this.model.subscription();
    // subscription.save({}, {
    //   success: function () {
    //     that.model.subscribe();
    //     var old_count = that.blog.get('subscriptions_count');
    //     that.blog.set('subscriptions_count', old_count + 1);
    //   }
    // });

  },

  deleteSubscription: function () {
    this.model.unsubscribe();
    // var that = this;
    // var subscription = this.model.subscription();
    // subscription.destroy({
    //   success: function () {
    //     that.model.unsubscribe();
    //     that.render();
    //     var old_count = that.blog.get('subscriptions_count');
    //     that.blog.set('subscriptions_count', old_count - 1);
    //   }
    // })
  }

});
