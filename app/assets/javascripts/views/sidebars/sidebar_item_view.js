Stumplr.Views.SidebarItemView = Backbone.CompositeView.extend({
  template: JST['sidebars/item'],



  initialize: function () {
    this.listenTo(this.model, "sync change:posts_count", this.render);
    this.listenTo(this.model, "sync change:posts_count", this.changeColor);
  },

  render: function () {
    var renderedContent = this.template({
      blog: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  changeColor: function(){
    if(this.model.hasChanged("posts_count") || this.model.previous("posts_count") === NaN){
      $("#sidebar-item-" + this.model.id + " > a").css("color", '#428bca');
    }
  }


});
