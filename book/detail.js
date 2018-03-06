$(document).ready(function(){
	// populate data stored in localStorage from index page
	$("#output").prepend(
		"<h2>" + localStorage.title + "</h2>" +
		"<h3>" + localStorage.author + "</h3>" +
		"<img src='" + localStorage.cover + "' class='mainimg'>" +
		"<p>Media: " + localStorage.media + "</p>" +
		"<p>Location: " + localStorage.location + "</p>" +
		"<p>Sublocation: " + localStorage.sublocation + "</p>" +
		"<p>isbn: " + localStorage.isbn + "</p>" +
		"<p>Available copy: " + localStorage.availablecopy + "</p>"
		);
})