Stumplr.Views.BlogShow = Backbone.CompositeView.extend({
  Template: JST['blogs/show'],


  className: 'blog-show',

  initialize: function () {
    this.listenTo(this.model, "sync add", this.render);
    this.listenTo(this.model.posts(), "new", this.closeModal);
    this.collection = this.model.posts();
    this.listenTo(this.collection, 'add', this.addPost);


  },

  events: {
    'show.bs.modal #newPostForm': 'showModal'
  },

  showModal: function (event) {
    var button = $(event.relatedTarget);
    var recipient = button.data('whatever');
    var view = new Stumplr.Views.PostForm({
      recipient: recipient,
      model: this.model,
      collection: this.model.posts()
    });
    this.$el.find('.modal-content').html(view.render().$el);
  },

  render: function () {
    var renderedContent = this.Template({
      blog: this.model
    });
    this.$el.html(renderedContent);
    this.renderPosts();

    return this;
  },

  closeModal: function (event) {
    $('#newPostForm').modal('hide')
  },

  addPost: function (post) {
    var view = new Stumplr.Views.PostShow({
      model: post
    });
    this.addSubview('#posts', view);
  },

  renderPosts: function () {
    debugger;
    this.model.posts().each(this.addPost.bind(this));
},
});
