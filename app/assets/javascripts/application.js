// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.serializeJSON
//= require flip
//= require underscore
//= require backbone
//= require bootstrap
//= require stumplr
//= require_tree ../templates
//= require_tree ./utils
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

$(function () {
  $('#new-blog-form').on('ajax:error', function (event, response) {
    // console.log(response.responseJSON);
    $('.new-blog-errors').html(response.responseJSON)
  });
  $('#new-blog-form').on('ajax:success', function (event, response) {
    // console.log(response.responseJSON);
    $('#myModal').modal('hide');
    $('#myModal').on('hidden.bs.modal', function () {
      Backbone.history.navigate("/blogs/" + response.id, { trigger: true })
    })
  });
});
