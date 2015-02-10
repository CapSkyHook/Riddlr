Stumplr.Views.PostShow = Backbone.CompositeView.extend({
  template: JST['posts/show'],

  className: 'post-show',

  events: {
    "click a.post-delete": "destroyPost",
    "click a.post-edit": 'editPost'

  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.collection, "new", this.closeModal);

  },

  render: function () {
    var renderedContent = this.template({
      post: this.model
    });

    this.$el.html(renderedContent);
    this.addProfilePhoto();
    this.$(".post-pic").attr("src", this.model.get('filepicker_url'));
    return this;
  },

  destroyPost: function (event) {
    event.preventDefault();
    this.model.destroy();
  },

  editPost: function (event) {
    event.preventDefault();
    var editFormView = new Stumplr.Views.PostForm({
      model: this.model,
      recipient: this.model.get('content_type'),
      collection: this.model.collection
    });
    this.$("#modal-form-wrapper").html(editFormView.render().$el);
  },

  addProfilePhoto: function () {
    if (this.model.get('blog_picture_url')) {
      this.$(".post-blog-image").attr("style", "width:75px;height:75px")
      this.$(".post-blog-image").attr("src", this.model.get('blog_picture_url'))
    }
  }

})
