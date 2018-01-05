$(document).ready(function(){
	var lat;
	var lon;
	var location;
	var kTemp;
	var cTemp;
	var fTemp
	var weather;
	var tempSwap = true;
	var wind;
	// Get user current location
	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
	    	// $("#coord").html("latitude: " + lat.toFixed(2) + " longitude: " + lon.toFixed(2));
  		
	  		var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=cc67c4eb972b7fb904a993f2b521f6ba";
			$.getJSON(api, function(data) {
				location = data.name;
				kTemp = data.main.temp;
				cTemp = kTemp - 273.15;
				fTemp = 9*(kTemp-273.15)/5 + 32;
				weather = data.weather[0].main;
				wind = data.wind.speed * 3.6;
				$("#location").html(location);
				$("#cTemp").html(cTemp.toFixed(1) + " &#8451");
				$("#weather").html(weather);
				$("#wind").html(wind.toFixed(1) +" km/hr wind");

				// change icons/background
				if (weather ==="Rain" || weather ==="Drizzle") {
					$("#icon").attr("class", "wi wi-showers")
				} else if (cTemp >30) {
					$("body").css('background-image', 'url(https://cdn.pixabay.com/photo/2015/06/20/07/24/color-815552_1280.png)');
					$("#icon").attr("class", "wi wi-hot")
				} else if (weather === "Clouds" || cTemp >10) {
					$("body").css('background-color', '#34ABFF');
					$("body").css('background-image', 'url(#)');
					$("#icon").attr("class", "wi wi-day-cloudy")
				} else if (cTemp >0) {
					$("body").css('background-image', 'url(http://eskipaper.com/images/ice-background-2.jpg)');
					$("#icon").attr("class", "wi wi-snowflake-cold")
				}

				// temp unit switch
				$("#tempSwapBtn").click(function(){
					if(tempSwap) {
						$("#cTemp").html(fTemp.toFixed(1) + " &#8457");
						tempSwap = false;
					} else if (!tempSwap) {
						$("#cTemp").html(cTemp.toFixed(1) + " &#8451");
						tempSwap = true;
					}
				});
			})
			
		});
  	}
});


