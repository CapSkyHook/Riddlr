Stumplr.Views.LinkView = Backbone.View.extend({
  template: JST['links/link'],
  nonQuoteTemplate: JST['links/item'],
  quoteTemplate: JST['links/quoteItem'],

  events: {
    "click .navigate-link": "navigatePage",
    "click .item-link": "showModal"
  },

  className: "title-for-link",

  showModal: function(){
    var template;
    if (this.model.get('content_type') === "Quote") {
      template = this.quoteTemplate;
    } else {
      template = this.nonQuoteTemplate;
    }
    var modal = template({
      link: this.model,
      modalId: this.modalId()
    });
    $('#modal-home').html(modal);
    $("#" + this.modalId()).modal();
  },

  modalId: function(){
    return "link-show-modal-" + this.model.id;
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {

    // if (this.model.get('content_type') === "Quote") {
    //   var renderedContent = this.quoteTemplate({
    //     link: this.model
    //   });
    // } else {
    //   var renderedContent = this.template({
    //     link: this.model
    //   });
    // }
    var renderedContent = this.template({
        link: this.model
      });
    this.$el.html(renderedContent);

    return this;
  },

  navigatePage: function (event) {
    event.preventDefault();
    var $modal = this.$('.link-modal');
    var that = this;
    $modal.on('hidden.bs.modal', function(){
      Backbone.history.navigate(("#/blogs/" + that.model.get('blog_id')), { trigger: true })
    });
    $modal.modal('hide');
  }
});
