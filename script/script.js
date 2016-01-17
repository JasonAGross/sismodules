/* Modal Popup Controls */

$('.modalNav li').click(function(){
	var panel = $(this).attr('data-control');
	$(this).closest('.modal').find('.modalPanel').slideUp('fast', function() {
		$('.' + panel).slideDown('fast');
	});
});