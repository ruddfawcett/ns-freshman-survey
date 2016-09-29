$(function() {
  $.each($('.chart:not(.full.no-toggle)'), function(index, chart) {
    if (index%2 == 0) {
      $(this).find('.exeter').hide();
    }
    else {
      $(this).find('.andover').hide();
    }
  });
  $.each($('.toggle'), function(index, button) {
    if (index%2 == 0) {
      $(this).html("<a class='active' data-school='a'>Andover</a><a data-school='e'>Exeter</a>");
    }
    else {
      $(this).html("<a data-school='a'>Andover</a><a class='active' data-school='e'>Exeter</a>");
    }
  });
  $('.toggle a').on('click', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass();
    if ($(this).data('school') === 'a') {
      $(this).parent().parent().find('.exeter').hide();
      $(this).parent().parent().find('.andover').show();
    }
    else {
      $(this).parent().parent().find('.exeter').show();
      $(this).parent().parent().find('.andover').hide();
    }
  });
});
