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

  },

  deleteSubscription: function () {
    this.model.unsubscribe();
  }

});
