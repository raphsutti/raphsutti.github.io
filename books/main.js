$(document).ready(function(){
	var url = "http://vcld.fsdcmel.librarysolutions.com.au/VCLD_FS_TEST/SmartLibrary/Services/Search/SMLIB_SERVICE_SEARCH.asmx/GetRecommendList";
	$.ajax({
		type:"GET",
		url: url,
		async: false,
		dataType: "json",
		success: function(data){
			var book = data.items;
			// Reset table to blank
			$("#output").html("");
			var sorted = book.sort(function (a, b) {
				if (a.availablecopy > b.availablecopy) {
  					return -1;
  				}
				if (a.availablecopy < b.availablecopy) {
 					 return 1;
 				}
				return 0;
			});

			// initialise colour variable
			var copyColour;
			for (var i=0; i<book.length; i++) {
				// display grey colour if 0 available copy and red if >0
				if(parseInt(book[i].availablecopy) > 0){
					copyColour = "red"
				} else {
					copyColour = "grey"
				}

				// populates result table
				$("#output").prepend(
					"<tr class='clickable-row'>" +
			            "<th style='width: 60%' scope='row'><div class='imgcover'><img class='cover' src='" + book[i].cover + "''></div></th>" +
									"<td class='" + copyColour + "'><a href='detail.html' data-id='" + book[i].bookid + "'target='_blank'>" + book[i].title + "</a></td>" +
			        "</tr>"
					);

				// set click listener
				$(".clickable-row").unbind().click(function() {

					// find book id stored in "data-id" in a tag
					id = $(this).find("a").attr("data-id")
					var result = book.filter(function(obj) {
					  return obj.bookid == id;
					});

					// loop through object to store into localStorage
					for (var key in result[0]) {
						if (result[0].hasOwnProperty(key)) {
							localStorage.setItem(key, result[0][key])
						}
					}
				});
			}

		},
		error: function(errorMessage){
			alert("Error");
		}
	});
})
