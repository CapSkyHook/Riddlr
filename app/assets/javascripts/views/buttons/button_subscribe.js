Stumplr.Views.SubscribeButtonView = Backbone.View.extend({
  template: JST['buttons/subscribe'],

  subscribedTemplate: JST['buttons/subscribed'],

  events: {
    "click button.subscribe-button": "addSubscription",
    "click button.subscribed-button": "deleteSubscription"
  },

  initialize: function (options) {
    this._blog_id = options.blog_id;
  },

  render: function () {
    this._subscribed = !this.model.isNew();

    var renderContent = this.template({
      subscribed: this._subscribed
    });

    this.$el.html(renderContent);
    return this;
  },

  addSubscription: function () {
    var that = this;
    this.model.save({}, {
      success: function () {
        that.render();
      }
    });
  },

  deleteSubscription: function () {
    var that = this;
    var blog_id = this.model.get('blog_id');
    this.model.destroy({
      success: function () {
        that.model = new Stumplr.Models.Subscription({ blog_id: blog_id });
        that.render();
      }
    })
  }

});
