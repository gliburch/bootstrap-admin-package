var component = {
	tabWithDropdown: function() {
		$(document).on('click', 'ul.nav li a', function(e) {
			e.preventDefault();
			if($(this).attr('data-toggle') == 'dropdown') {
				console.log('toggle');
			} else {
				console.log($(this).closest('li'));
				$('ul.nav li').removeClass('active');
				$(this).closest('li').addClass('active');
			}
			$(this).parents('li')[1] ? $($(this).parents('li')[1]).addClass('active') : false;
		});
	}
}

$(function() {

	component.tabWithDropdown();	
	
})




