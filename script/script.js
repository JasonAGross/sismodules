/* Modal Popup Controls */

$('.modalNav li').click(function(){
	var panel = $(this).attr('data-control');
	$(this).closest('.modal').find('.modalPanel').slideUp('fast', function() {
		$('.' + panel).slideDown('fast');
	});
});

$('.toggleSettings').click(function() {
	var pos = $(this).offset(),
		topOffset = $(this).outerHeight() + 35,
		leftOffset = ($('.assignmentSettings').width() / 2) - ($(this).width() / 2);
	$('.assignmentSettings').toggleClass('active').attr('style','top:' + (pos.top + topOffset) + ';left:' + (pos.left - leftOffset) + ';');
});

$('.addNewStudent button').click(function() {
	var pos = $(this).offset(),
		topOffset = $(this).outerHeight() + 35,
		leftOffset = ($('.addStudent').width() / 2) - ($(this).width() / 2);
	$('.addStudent').toggleClass('active').attr('style','top:' + (pos.top + topOffset) + ';left:' + (pos.left - leftOffset) + ';');
});


var dataRef = new Firebase('https://shining-inferno-9979.firebaseio.com/');

function addStudent() {
	dataRef.push({
		"name": $('#studentName').val(),
		"studentID": $('#studentID').val()
	});
}