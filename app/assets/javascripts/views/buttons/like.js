Stumplr.Views.LikeButtonView = Backbone.View.extend({
  template: JST['buttons/like'],
  events: {
    "click button.like-button": "addLike",
    "click button.liked-button": "deleteLike"
  },

  initialize: function () {
    this.listenTo(this.model, "sync add change:likes_count", this.render)
  },

  render: function () {
    var like = this.model.like();
    this._liked = !like.isNew();
    var renderContent = this.template({
      liked: this._liked,
      post: this.model
    });

    this.$el.html(renderContent);
    return this;
  },

  addLike: function () {
    this.model.addLike();

  },

  deleteLike: function () {
    this.model.unlike();
  }

});
