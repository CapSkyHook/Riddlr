Stumplr.Views.FeedView = Backbone.CompositeView.extend({
  feedTemplate: JST['feeds/index'],


  className: 'feed-view',



  initialize: function () {
    Stumplr.counter = 0
    this.listenTo(this.collection, 'add', this.addPost);
  },


  render: function () {
    $("body").css("background-image", 'url(' + 'https://artofwallpapers.files.wordpress.com/2013/10/batman-arkham-city-robin-wallpaper-1920x1200.jpg' + ')' )
    $("body").css("background-size", '100%')
    var renderedContent = this.feedTemplate({
    });
    this.$el.html(renderedContent);
    return this;
  },


  addPost: function (post) {
    var view = new Stumplr.Views.FeedViewItem({
      model: post,
    });
    Stumplr.counter ++;
    this.addSubview('.timeline-list', view);
  }

});
