/* Modal Popup Controls */

$('.modalNav li').click(function(){
	var panel = $(this).attr('data-control');
	$(this).closest('.modal').find('.modalPanel').slideUp('fast', function() {
		$('.' + panel).slideDown('fast');
	});
});

$('.toggleSettings').click({modal: "assignmentSettings"}, positionModal);
$('.addNewStudent button').click({modal: "addStudent"},positionModal);

function positionModal(event) {
	// Position modal based on the clicked button
	var modal = event.data.modal,
		pos = $(this).offset(),
		topOffset = $(this).outerHeight() + 35,
		leftOffset = ($('.' + modal).width() / 2) - ($(this).width() / 2);
	$('.' + modal).toggleClass('active').attr('style','top:' + (pos.top + topOffset) + ';left:' + (pos.left - leftOffset) + ';');

	// Do some checks to make sure the modal is still on the screen.
	var newPos = $('.' + modal).offset(),
		areaHeight = $(window).height(),
		areaWidth = $(window).width()
	if (newPos.left < 0) {
		$('.' + modal).attr('style', 'left: 1%;')
	} else if (newPos.top > areaHeight - $('.' + modal).outerHeight()) {
		$('.' + modal).attr('style', 'top:' + newPos.top - $('.' + modal).outerHeight())
	} else if (newPos.left > areaWidth - $('.' + modal).width()) {
		$('.' + modal).attr('style', 'left:' + areaWidth - $('.' + modal).width())
	}
}

/* Data Interaction */ 
$('#newStudent').click(addStudent);

var ref = new Firebase('https://shining-inferno-9979.firebaseio.com/');

function addStudent() {
	var studentRef = ref.child("students");
	studentRef.push({
		"name": $('#studentName').val(),
		"studentID": $('#studentID').val()
	});
}