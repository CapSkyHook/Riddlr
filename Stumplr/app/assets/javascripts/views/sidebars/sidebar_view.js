Stumplr.Views.SidebarView = Backbone.CompositeView.extend({

  template: JST['sidebars/view'],


  className: "sidebar-view",

  events: {
    "submit": "searchResults"
  },

  initialize: function (options) {
    this.listenTo(this.collection, 'add', this.addBlogListItem);
    this.listenTo(Stumplr.Collections.searchResultBlogs, 'add', this.addSearchResultItem);
    this.listenTo(Stumplr.Collections.searchResultBlogs, 'sync', this.renderSearchResults)
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
  // this should go in a search view class, and then add each item to it's div
  addSearchResultItem: function (searchResultItem) {
    var view = new Stumplr.Views.SearchResultItemView({
      model: searchResultItem
    });
    this.$rootEl.html("Results!....I...wish...")
    this.addSubview(this.$rootEl, view);
  },

  renderSearchResults: function () {
    /// this will add the total search result to the view
    //pass collection to this then render the view here, index view.

  },

  searchResults: function (event) {
    event.preventDefault();
    var that = this;
    var attrs = $(event.target).serializeJSON();
    Stumplr.Collections.searchResultBlogs.fetch({
      data: attrs})
      Backbone.history.navigate('search/' + attrs['search_term'])
    // var renderedContent = new Stumplr.Views.SearchView({
    //   collection: blogResults
    // });
    //
    // this.$rootEl.html(renderedContent.render().$el);


  }

});
