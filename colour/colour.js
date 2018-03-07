var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll('.square');
var colourDisplay = document.getElementById('colourDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll(".mode");

init();

// Set up functions
function init() {
	setupModeButton();
	setupSquares();
	reset();	
}

// easy and hard mode buttons
function setupModeButton() {
	for (var i=0; i<modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			// reset and add highlighted selected class
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			//  set numSquares for later
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

// squares click listener and compare
function setupSquares() {
	for (var i=0; i<squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener('click', function() {
			// grab colour of clicked square
			var clickedColour = this.style.backgroundColor;
			// compare colour to pickedColour
			if (clickedColour === pickedColour) {
				messageDisplay.textContent = "Correct!"
				// Change all squares to correct colour
				changeColours(clickedColour);
				h1.style.background = clickedColour;
				resetButton.textContent = "Play again?"
			} else {
				// Make clicked square disappear
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!"
			}
		})
	}
}

function reset() {
	// generate all new colours
	colours = generateRandomColours(numSquares);
	// picked new random colour from array
	pickedColour = pickColour();
	// change colourDisplay to match picked colour
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
	// change colours of squares
	for (var i=0; i<squares.length; i++) {
		if(colours[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	// h1.style.background = "";
}

function generateRandomColours(num) {
	var arr = [];
	// repeat num times
	for(var i=0; i<num; i++) {
		// get random colour put into arr
		arr.push(randomColour());
	}
	return arr;
}

// random rgb value
function randomColour() {
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// pick out of 6 or 3 colours
function pickColour() {
	var random = Math.floor(Math.random()*colours.length);
	return colours[random];
}

// reset button
resetButton.addEventListener('click', function(){
	reset();
})

// change all squares to winning colour
function changeColours(colour) {
	// loop through all squares
	for(var i=0; i<squares.length; i++) {
		// change all squares to match given colour
		squares[i].style.background = colour;
	}
}