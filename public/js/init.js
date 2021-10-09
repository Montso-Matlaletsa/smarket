(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('select').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery
