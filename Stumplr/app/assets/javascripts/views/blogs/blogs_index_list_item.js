Stumplr.Views.BlogListItem = Backbone.View.extend({
  tagName: "li",

  template: JST["blogs/index_List_Item"],

  render: function () {
    var content = this.template({
      blog: this.model
    });
    this.$el.append(content);

    return this;
  }
})
