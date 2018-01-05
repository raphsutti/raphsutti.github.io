$(document).ready(function(){
	var buzzer = $('#buzzer')[0];

	var count = parseInt($("#num").html());
	var breakTime = parseInt($("#breakNum").html());
	// console.log(count);
	$("#reset").hide();

	$("#start").click(function() {
		// run this every 1s
		var counter = setInterval(timer, 1000);
		count *= 60;
		function timer() {
			// hide variables
			$("#start, #minus5Clock, #add5Clock, #add5Break, #minus5Break, #breakNum, #title1, #title2").hide();
			$("#timeType").show();
			$("#timeType").html("Session Time:");
			count -= 1;
			// stop at 0
			if(count === 0 ) {
				buzzer.play();
				clearInterval(counter);
				var startBreak = setInterval(breakTimer, 1000);
				breakTime *= 60;
				$("#num").hide();
			}

			// display minutes and seconds
			if (count % 60 >= 10) {
				$("#num").html(Math.floor(count/60)+":"+count%60)
			} else {
				$("#num").html(Math.floor(count/60)+":"+"0"+count%60)
			}
			// $("#num").html(count);

			function breakTimer() {
				$("#timeType").html("Break Time:");
				$("#breakNum, #timeType").show();
				breakTime -= 1;
				if(breakTime === 0) {
					clearInterval(startBreak);
					buzzer.play();
					$("#reset").show();
					$("#breakNum, #timeType").hide();
				}
				// display minutes and seconds
				if (breakTime % 60 >= 10) {
					$("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60)
				} else {
					$("#breakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60)
				}
					// $("#breakNum").html(breakTime);
				}

		}

	});

	// reset button
	$("#reset").click(function() {
		count = 25;
		breakTime = 25;
		$("#num").html(count);
		$("#breakNum").html(breakTime);
		$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show()
		$("#timeType, #reset").hide();
	})

	// time adjustment buttons
	$("#minus5Clock").click(function(){
		if(count>5){
			count -=5;
		};
		$("#num").html(count);
	});

	$("#add5Clock").click(function(){
		count +=5;
		$("#num").html(count);
	});

	$("#minus5Break").click(function(){
		if(breakTime>5){
			breakTime -=5;
		};
		$("#breakNum").html(breakTime);
	});
	
	$("#add5Break").click(function(){
		breakTime +=5;
		$("#breakNum").html(breakTime);
	});
})