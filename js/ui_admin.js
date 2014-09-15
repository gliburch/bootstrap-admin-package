$(function() {

	var publicComponents = {
		tabWidthDropdown: function() {
			var tab_with_dropdown_buttons = $('ul.nav li a').not('[data-toggle="dropdown"]');
			var tab_with_dropdown_all = $('ul.nav li');
			tab_with_dropdown_buttons.on('click', function(e) {
				e.preventDefault();
				tab_with_dropdown_all.removeClass('active');
				$(this).closest('li').addClass('active');
				$(this).parents('li')[1] ? $($(this).parents('li')[1]).addClass('active') : false;
			});
			$(tab_with_dropdown_buttons[0]).trigger('click');
		}()
	}
	
})