Stumplr.Views.PostForm = Backbone.CompositeView.extend({
  textTemplate: JST['posts/text'],

  initialize: function (options) {
    this.recipient = options.recipient
  },

  render: function () {
    if (this.recipient === "Text") {

      var renderedContent = this.textTemplate({
        blog: this.model
      });
    }
    this.$el.html(renderedContent);
    return this;
  },

})

// so we are going to find the modal body the same way we did for showmodal and we are going to chagne the html to the new view.render().html, and create separate views for each one
