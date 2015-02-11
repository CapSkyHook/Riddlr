Stumplr.Views.PostForm = Backbone.CompositeView.extend({
  textTemplate: JST['posts/text'],
  pictureTemplate: JST['posts/picture'],
  quoteTemplate: JST['posts/quote'],

  events: {
    'submit #form_id': 'submit',
    'click button.btn-default': 'loadPhoto'
  },

  initialize: function (options) {
    this.blog = options.blog
    this.recipient = options.recipient
    if (this.model.get('filepicker_url')) {
      this._imageUrl = this.model.get('filepicker_url');
      this.loadPhoto();
    } else { this._imageUrl = '';};
    // this.listenTo(this.model, 'update', this.render)
  },

  submit: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    var that = this;
    this.model.set(attrs.post);
    this.model.set('filepicker_url', this._imageUrl);
    var $modal = this.$('#modal-form');
    that.model.save({}, {
      success: function (){
        $modal.on('hidden.bs.modal', function(){
          that.blog.posts().add(that.model, { merge: true });
        })
        $modal.modal('hide');
        that.blog.addPost();
      },

      error: function (model, response) {
        that.$('.errors').html(response.responseJSON)
      }
    });

  },

  render: function () {
    if (this.recipient === "Text") {
      var renderedContent = this.textTemplate({
        post: this.model
      });
    } else if (this.recipient === "Picture") {
      var renderedContent = this.pictureTemplate({
        post: this.model
      })
    } else if (this.recipient === "Quote") {
      var renderedContent = this.quoteTemplate({
        post: this.model
      })
    }
    this.$el.html(renderedContent);
    if(this.recipient === "Picture") {
        var element = this.$('.pick-blog-image-input')[0];
        element.type="filepicker-dragdrop";
        element.onchange = function(e){
          console.log(JSON.stringify(e.fpfile));
        };
        filepicker.constructWidget(element);
    }
    this.$('#modal-form').modal('show')
    return this;
  },

  loadPhoto: function () {
    var that = this;
    if (this._imageUrl) {
      $(".post-image-prev").attr("src", that._imageUrl);
    } else {
      filepicker.pick(
        function(Blob){
          that._imageUrl =  Blob.url;
          $(".post-image-prev").attr("src", Blob.url);
        }.bind(this)
      );
    }
  }

})
