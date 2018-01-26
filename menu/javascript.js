$(document).ready(function() {
	// alert('hi');
	$('div').mouseenter(function() {
		$(this).toggleClass('show-description');
	});
	// $('div').click(function() {
	// 	$(this).toggleClass('show-description');
	// });

	$(".nav-link").on("click", function(){
	   $(".nav-item").removeClass("active");
	   $(this).parent().addClass("active");
	});
})
