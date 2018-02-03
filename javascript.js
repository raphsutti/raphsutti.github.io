$(document).ready(function() {

	// add clicking functionality
	$(".panel-button").on('mouseover', function() {
		var panelId = '#'+$(this).attr('data-panelid'); // #panel*
		var content = "changed content!";
		$(panelId).fadeToggle();
		$(panelId+' .panel-body').html(content);
	});

// 
});