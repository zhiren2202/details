const courseSummary = $('.course_tab_btn');

courseSummary.on('click', function () {
  if ($(this).parent().is('[open]')) {
    $(this).parent().attr('open');
    console.log('if');
  } else {
    $(this).parent().siblings().removeAttr('open');
    console.log('else');
  }
});

const areaSummary = $('.area_tab_btn');
areaSummary.on('click', function () {
  if ($(this).parent().is('[open]')) {
    $(this).parent().attr('open');
    console.log('if');
  } else {
    $(this).parent().siblings().removeAttr('open');
    console.log('else');
  }
});