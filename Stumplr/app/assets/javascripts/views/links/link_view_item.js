Stumplr.Views.LinkView = Backbone.View.extend({
  template: JST['links/item'],

  events: {
    "click .navigate-link": "navigatePage"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    var renderedContent = this.template({
      link: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },

  navigatePage: function (event) {
    event.preventDefault();
    var $modal = this.$('.link-modal');
    var that = this;
    $modal.on('hidden.bs.modal', function(){
      Backbone.history.navigate(("#/blogs/" + that.model.get('blog_id')), { trigger: true })
    });
    $modal.modal('hide');
  }
});
