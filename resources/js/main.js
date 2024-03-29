const summary = $('.course_tab_btn');

summary.on('click', function () {
  if ($(this).parent().is('[open]')) {
    $(this).parent().attr('open');
    console.log('if');
  } else {
    $(this).parent().siblings().removeAttr('open');
    console.log('else');
  }
});