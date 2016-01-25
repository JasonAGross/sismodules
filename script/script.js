/* Modal Popup Controls */

$('.modalNav li').click(function(){
	var panel = $(this).attr('data-control');
	$(this).closest('.modal').find('.modalPanel').slideUp('fast', function() {
		$('.' + panel).slideDown('fast');
	});
});

$('.toggleSettings').click(function() {
	var pos = $(this).position(),
		topOffset = $(this).outerHeight() + 35,
		leftOffset = $('.assignmentSettings').width() / 2;
	$('.assignmentSettings').toggleClass('active').attr('style','top:' + (pos.top + topOffset) + ';left:' + (pos.left - leftOffset) + ';');
});