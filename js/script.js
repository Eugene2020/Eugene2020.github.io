$(function(){
	initProgramSelection();
  function initProgramSelection(){
  	var $program_selection = $('div.five-minute-course');
    $('ul.nav-tabs a', $program_selection).on('click', function() {
      return false;
    });
    $('input.five-minute-course__button', $program_selection).on('click', function(e) {
    	e.preventDefault();
      var id = $(this).data('href');
      $('a[href="' + id + '"]', $program_selection).tab('show');
    });
  }

});

$(function () {
  var state = 0;
  var maxState = 6;
  var winWidth = $(window).width();
  $(window).resize(function () {
    winWidth = $(window).width();
    $('.nav-link-course-lang,.nav-v-pills-courses-container').width(winWidth);
    $('.nav-v-pills-courses-container').scrollLeft((winWidth) * state);
  }).trigger('resize');
  $(document).on('click', '.lefty', function () {
    if (state == 0) {
      state = maxState;
    } else {
      state--;
    }
    $('.nav-v-pills-courses-container').animate({ scrollLeft: ((winWidth) * state) + 'px' }, 800);
  });
  $(document).on('click', '.righty', function () {
    if (state == maxState) {
      state = 0;
    } else {
      state++;
    }
    $('.nav-v-pills-courses-container').animate({ scrollLeft: ((winWidth) * state) + 'px' }, 800);
  });
});