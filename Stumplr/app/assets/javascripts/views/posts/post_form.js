Stumplr.Views.PostForm = Backbone.CompositeView.extend({
  textTemplate: JST['posts/text'],
  pictureTemplate: JST['posts/picture'],

  events: {
    'submit #form_id': 'submit',
    'click button.btn-default': 'loadPhoto'
  },

  initialize: function (options) {
    this.recipient = options.recipient
    this._imageUrl = ''
  },

  submit: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    var that = this;
    var newPost = new Stumplr.Models.Post(attrs.post);
    newPost.set('blog_id', this.model.id);
    newPost.set('filepicker_url', this._imageUrl);
    newPost.save({}, {
      success: function (){
        that.collection.add(newPost);
        that.collection.trigger('new')
      }
    });

  },

  render: function () {
    if (this.recipient === "Text") {
      var renderedContent = this.textTemplate({
        blog: this.model
      });
    } else if (this.recipient === "Picture") {
      var renderedContent = this.pictureTemplate({
        blog: this.model
      })
    }
    this.$el.html(renderedContent);
    if(this.recipient === "Picture") {
        var element = this.$('.pick-image-input')[0];
        element.type="filepicker-dragdrop";
        element.onchange = function(e){
          console.log(JSON.stringify(e.fpfile));
        };
        filepicker.constructWidget(element);
    }
    return this;
  },

  loadPhoto: function () {
    var that = this;

    filepicker.pick(
      function(Blob){
        that._imageUrl =  Blob.url;
        $(".post-image-prev").attr("src", Blob.url);
      }.bind(this)
    );
  }

})
