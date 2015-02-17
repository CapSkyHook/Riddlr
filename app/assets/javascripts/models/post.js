Stumplr.Models.Post = Backbone.Model.extend({
  urlRoot: '/posts',

  like: function () {
    if (!this._like) {
      this._like = new Stumplr.Models.Like({post_id: this.id});
    }

    return this._like;
  },

  parse: function (response) {
    this.like().set({post_id: response.id});

    if (response.like) {
      this.like().set(response.like, { parse: true });
      delete response.like;
    }


    return response;
  },

  updateCount: function (attr, diff){
    var old_count = this.get(attr);
    this.set(attr, old_count + diff)
  },

  updateLikeCount: function(diff){
    this.updateCount('likes_count', diff)
  },

  addLike: function(){
    var that = this;
    this.like().set("post_id", this.id)
    this.like().save({}, {success: function(){
      that.updateLikeCount(1);
    }});
  },

  unlike: function(){
    var that = this;
    this.like().destroy({
      success: function(){
        delete that._like;
        that.updateLikeCount(-1);
      }
    });

  },

});
