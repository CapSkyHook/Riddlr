Stumplr.Views.BlogShow = Backbone.CompositeView.extend({
  template: JST['blogs/show'],


  className: 'blog-show',

  initialize: function () {
    this.listenTo(this.model, "sync add change:subscriptions_count", this.render);
    this.listenTo(this.model.posts(), "new", this.closeModal);
    this.collection = this.model.posts();
    this.listenTo(this.collection, 'add', this.addPost);
    this.listenTo(this.collection, 'destroy', this.render);

  },

  events: {
    "click button.make-post-form": 'showModal'
  },

  showModal: function (event) {
    var button = $(event.currentTarget);
    var recipient = button.data('whatever');

    var newPost = new Stumplr.Models.Post({ blog_id: this.model.id })
    var view = new Stumplr.Views.PostForm({
      recipient: recipient,
      model: newPost,
      collection: this.model.posts()
    });
    this.$el.find('#modal-form-wrapper').html(view.render().$el);
  },

  render: function () {
    var renderedContent = this.template({
      blog: this.model
    });
    this.$el.html(renderedContent);
    this.addProfilePhoto();
    this.renderPosts();
    this.addSubscribeButton();
    return this;
  },


  addPost: function (post) {
    var view = new Stumplr.Views.PostShow({
      model: post
    });
    this.addSubview('#posts', view);
  },

  addSubscribeButton: function () {
    var view = new Stumplr.Views.SubscribeButtonView({
      model: this.model
    });
    this.addSubview('#subscribe-button', view);
  },

  renderPosts: function () {
    this.model.posts().each(this.addPost.bind(this));
  },

  addProfilePhoto: function () {
    if (this.model.get('profile_image')) {
      $(".blog-profile-picture").attr("src", this.model.get('profile_image'))
    }
  }
});
