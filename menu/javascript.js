$(document).ready(function() {
	// alert('hi');
	$('div').mouseenter(function() {
		$(this).toggleClass('show-description');
	});
	$('div').click(function() {
		$(this).toggleClass('show-description');
	});
})
