Stumplr.Views.SidebarView = Backbone.CompositeView.extend({

  template: JST['sidebars/view'],


  className: "sidebar-view",

  events: {
    "focus .search-bar": "showPopover",
    "focusout .search-bar": "hidePopover",
    "submit": "searchResults"
  },

  initialize: function (options) {
    this.subscribedBlogs = options.subscribedBlogs;
    this.listenTo(this.collection, 'add', this.addBlogListItem);
    this.listenTo(this.subscribedBlogs, 'add', this.addSubscribedBlogListItem);
    this.listenTo(this.subscribedBlogs, 'remove', this.removeBlog);
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
    if (blogListItem.get("owner_id") === Stumplr.current_user_id) {
      var view = new Stumplr.Views.SidebarItemView({
        model: blogListItem
      });
      this.addSubview('#sidebar-list', view);
    }
  },
  addSubscribedBlogListItem: function (suscribedBlogListItem) {
      var view = new Stumplr.Views.SidebarItemView({
        model: suscribedBlogListItem
      });
      this.addSubview('#subscribed-blogs-list', view);
  },

  removeBlog: function(blog){
    var view = $('#subscribed-blogs-list').find("#sidebar-item-" + blog.id)
    this.removeSubview('#subscribed-blogs-list', view)

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
