$(document).on('scroll', function() {
  if ($(document).scrollTop() > ($('header').height() - $('nav').height())) {
    $('nav').addClass('fixed');
  }
  else {
    $('nav').removeClass('fixed');
  }
});
