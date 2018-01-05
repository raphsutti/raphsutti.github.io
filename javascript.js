$(document).ready(function() {
	$(".nav-link").on("click", function(){
	   $(".nav-item").removeClass("active");
	   $(this).parent().addClass("active");
	});
});