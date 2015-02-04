Stumplr.Views.BlogShow = Backbone.CompositeView.extend({
  Template: JST['blogs/show'],


  className: 'blog-show',

  initialize: function () {
    this.listenTo(this.model, "sync add", this.render)
  },

  events: {
    'submit form': 'submit',
    'show.bs.modal #exampleModal': 'showModal'
  },

  showModal: function (event) {
    var button = $(event.relatedTarget);
    var recipient = button.data('whatever');
    var view = new Stumplr.Views.PostForm({
      recipient: recipient
    });
    this.$el.find('.modal-content').html(view.render().$el);
  },

  submit: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    var blog = this;
    var newPost = new Stumplr.Models.Post(attrs);
    newPost.save({}, {
      success: function (){
        blog.add(newPost);
      }
      //add new post the collection
      //rerender
    });
// make the backbone association
// make jbuilder template

  },

  render: function () {
    var renderedContent = this.Template({
      blog: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },
});
