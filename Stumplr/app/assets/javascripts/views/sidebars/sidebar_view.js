Stumplr.Views.SidebarView = Backbone.CompositeView.extend({

  template: JST['sidebars/view'],


  className: "sidebar-view",

  events: {
    "submit": "searchResults"
  },

  initialize: function (options) {
    this.listenTo(this.collection, 'add', this.addBlogListItem);
    this.$rootEl = options.$rootEl;
  },


  render: function () {
    var renderedContent = this.template({
      blog: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },


  addBlogListItem: function (blogListItem) {
    var view = new Stumplr.Views.SidebarItemView({
      model: blogListItem
    });
    this.addSubview('#sidebar-list', view);
  },

  searchResults: function (event) {
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    Stumplr.Collections.blogs.fetch({ data: { search_term: attrs }})
    // var renderedContent = new Stumplr.Views.SearchView({
    //   collection: blogResults
    // });
    //
    // this.$rootEl.html(renderedContent.render().$el);


    debugger;
  }

});
