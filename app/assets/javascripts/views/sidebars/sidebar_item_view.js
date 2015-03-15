Stumplr.Views.SidebarItemView = Backbone.CompositeView.extend({
  template: JST['sidebars/item'],



  initialize: function () {
    this.listenTo(this.model, "sync change:posts_count", this.render);
    this.listenTo(this.model, "change:posts_count", this.changeColor);
  },

  render: function () {
    var renderedContent = this.template({
      blog: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  changeColor: function(){
    $("a.my-blog-link").css("color", '#428bca');

  },


});
