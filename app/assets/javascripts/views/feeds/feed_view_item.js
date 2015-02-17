Stumplr.Views.FeedViewItem = Backbone.CompositeView.extend({
  template: JST['feeds/item'],
  quoteTemplate: JST['feeds/quoteItem'],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.collection, "new", this.closeModal);
  },

  tagName: "li",

  className: function (){
    if ((Stumplr.counter % 2) === 1) {
      return "timeline-inverted"
    }
  },

  render: function () {
    if (this.model.get('content_type') === "Quote") {
      var renderedContent = this.quoteTemplate({
        post: this.model,
      });
    } else {
      var renderedContent = this.template({
        post: this.model
      });

    this.addLikeButton();
  }
    this.$el.html(renderedContent);
    this.$(".post-pic").attr("src", this.model.get('filepicker_url'));
    return this;
  },

  addLikeButton: function () {
    var view = new Stumplr.Views.LikeButtonView({
      model: this.model
    });
    this.addSubview('.timeline-footer', view);
  },

});
