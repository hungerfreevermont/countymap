require([
  '//code.jquery.com/jquery-1.11.0.min.js',
  '//code.jquery.com/jquery-migrate-1.2.1.min.js'
], function() {
  jQuery.noConflict();

  (function($) {
    console.log('got jquery', $.ajax)
  }(jQuery))
});
