var component = {
	tabWithDropdown: function() {
		$(document).on('click', 'ul.nav li a', function(event) {
			event.preventDefault();
			if($(this).attr('data-toggle') != 'dropdown') {
				$(this).closest('ul.nav').find('li').removeClass('active');
				$(this).closest('li').addClass('active');
			}
			$(this).parents('li')[1] ? $($(this).parents('li')[1]).addClass('active') : false;
		});
	},
	buttonGroup: function() {
		$(document).on('click', '.btn-group .btn', function(event) {
			event.preventDefault();
			$(this).closest('.btn-group').find('.btn').removeClass('active');
			$(this).closest('.btn').addClass('active');
		});
	}
}

$(function() {

	component.tabWithDropdown();
	component.buttonGroup();
	
});