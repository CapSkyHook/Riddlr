Stumplr.Models.Post = Backbone.Model.extend({
  urlRoot: function () {'blogs/'+ this.get('blog_id') + '/posts'}
});
