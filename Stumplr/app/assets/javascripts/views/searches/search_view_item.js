Stumplr.Views.SearchViewItem = Backbone.CompositeView.extend({
  template: JST['searches/item'],


  className: 'search-item',



  initialize: function () {
    this.listenTo(this.collection, 'add', this.addLink);
  },


  render: function () {
    var renderedContent = this.template({
      blog: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },


  addLink: function (link) {

    var view = new Stumplr.Views.LinkView({
      model: link
    });
    this.addSubview('#links-list', view);
  }
});
