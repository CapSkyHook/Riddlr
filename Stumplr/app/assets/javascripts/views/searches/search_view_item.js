Stumplr.Views.SearchViewItem = Backbone.CompositeView.extend({
  template: JST['searches/item'],

  className: 'search-item',

  initialize: function () {
    // this.listenTo(this.collection, 'sync', this.render);
    this.model.posts().each(this.addLink.bind(this));

  },

  render: function () {
    var renderedContent = this.template({
      blog: this.model
    });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addLink: function (link) {
    var view = new Stumplr.Views.LinkView({
      model: link
    });
    this.addSubview('#links-list', view);
  }
});
