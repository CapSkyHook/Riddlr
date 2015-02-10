Stumplr.Views.SidebarView = Backbone.CompositeView.extend({

  template: JST['sidebars/view'],


  className: "sidebar-view",

  events: {
    "focus .search-bar": "showPopover",
    "focusout .search-bar": "hidePopover",
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
    var posts = blogListItem.posts();
    posts.fetch();
    var view = new Stumplr.Views.SidebarItemView({
      model: blogListItem,
      collection: posts
    });
    this.addSubview('#sidebar-list', view);
  },


  searchResults: function (event) {
    event.preventDefault();
    var that = this;
    var attrs = $(event.target).serializeJSON();
    var term = encodeURI(attrs['search_term']);
    Backbone.history.navigate('#/search/' + term, { trigger: true });
  },

  showPopover: function () {
    $(".search-bar").popover();
  },

  hidePopover: function () {
    $('.search-bar').popover('hide')
  }

});
