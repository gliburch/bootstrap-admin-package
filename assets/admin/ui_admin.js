var component = {
	tabWithDropdown: function() {
		$(document).on('click', 'ul.nav li a', function(e) {
			e.preventDefault();
			if($(this).attr('data-toggle') == 'dropdown') {
			} else {
				$('ul.nav li').removeClass('active');
				$(this).closest('li').addClass('active');
			}
			$(this).parents('li')[1] ? $($(this).parents('li')[1]).addClass('active') : false;
		});
	}
}

$(function() {

	component.tabWithDropdown();
	
});