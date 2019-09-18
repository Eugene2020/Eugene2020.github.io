$(function(){
	/* Inits */
	initProgramSelection();
  
  /* Functions */
  function initProgramSelection(){
  	var $program_selection = $('div.five-minute-course');
    
    $('ul.nav-tabs a', $program_selection).on('click', function() {
      return false;
    });

    $('input.five-minute-course__button', $program_selection).on('click', function(e) {
    	e.preventDefault();
      
      var id = $(this).data('href');
      /* Далее нужно добавить проверку валидности заполненных полей перед переходом на следующий шаг */
      $('a[href="' + id + '"]', $program_selection).tab('show');
    });
  }

});