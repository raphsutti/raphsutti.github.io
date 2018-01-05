$(document).ready(function() {
	// stores input
	var inputs = [""];
	// string result output that gets updated
	var totalString;
	// for validation purposes- eg. cant do two operators, decimals etc
	// Operators array without .
	var operators1 = ["+","*","/","-", "."];
	// Operators array with the .
	var operators2 = ["."];
	// to validate numbers
	var nums = [0,1,2,3,4,5,6,7,8,9];

	function getValue(input) {
		// check if last character is a .
		if(operators2.includes(inputs[inputs.length-1]) && input === ".") {
			console.log("Duplicate '.' ");
		// if one number, check if not operator	
		} else if (inputs.length === 1 && !operators1.includes(input)) {
			inputs.push(input);
			update();
		// check last character not an operator, add to array
		} else if (!operators1.includes(inputs[inputs.length-1])) {
			inputs.push(input);
			update();
		// check if input is a number, then append
		} else if (nums.includes(Number(input))) {
			inputs.push(input)
			update();
		} else {
			update();
		}
	};
	// to update display
	function update() {
		totalString = inputs.join("");
		$("#steps").html(totalString);
	};
	// evaluates calculation
	function getTotal() {
		totalString = inputs.join("");
		// eval in built function will calculate
		$("#steps").html(eval(totalString));
	};

	// click events
	$("a").on("click", function() {
		if(this.id === "deleteAll") {
			inputs = [""];
			update();
		} else if (this.id === "backOne") {
			inputs.pop();
			update();
		} else if (this.id === "total") {
			getTotal();
		} else {
			if(inputs[inputs.length-1].indexOf("+", "-", "/", "*") === -1) {
				getValue(this.id);
			} else {
				getValue(this.id);
			}
		}
	});

});