$(document).ready(function(){
	// wikiSearch.addEventListener("input", check);
	// function check() {
	// 	var result = wikiSearch.value;
	// }

	//Default input
	document.getElementById("wikiSearch").value = "Type your query here";
	
	// Make default input disappear when clicked
	$("#wikiSearch").click(function(){
		document.getElementById("wikiSearch").value = "";
	})

	$('#searchbtn').click(function(){
		var wikiSearch = $('#wikiSearch').val();
		// console.log(wikiSearch);
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+wikiSearch+"&format=json&callback=?";
		// console.log(url)

		// ajax call
		$.ajax({
			type:"GET",
			url: url,
			async: false,
			dataType: "json",
			success: function(data){
				// heading
				console.log(data[1][0]);
				// description
				console.log(data[2][0]);
				// url
				console.log(data[3][0]);
				// Reset listed search to blank
				$("#output").html("");
				// Loop through all objects
				for (var i=0; i<data[1].length; i++) {
					$("#output").prepend("<li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
				}
			},
			error: function(errorMessage){
				alert("Error");
			}
		});

	});

	// Allow user to press Enter key to search
	$("#wikiSearch").keypress(function(e){
		if(e.which==13) {
			$("#searchbtn").click();
		}
	});
})



