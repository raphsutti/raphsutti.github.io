var quotes = [
	["Walking on water and developing software from a specification are easy if both are frozen.", "Edward V Berard"],
	["FORTRAN is not a flower but a weed — it is hardy, occasionally blooms, and grows in every computer.", "Alan J. Perlis."],
	["For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match.", "Bill Bryson"], 
	["Talk is cheap. Show me the code.", "Linus Torvalds"], 
	["Python's a drop-in replacement for BASIC in the sense that Optimus Prime is a drop-in replacement for a truck.", "Cory Dodt"],
	["Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "Antoine de Saint-Exupéry"],
	["Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", "Bill Gates"],
	["First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.", "George Carrette"],
	["Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.", "Larry Wall"],
	["Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.", "Alan Kay"],
	["The trouble with programmers is that you can never tell what a programmer is doing until it's too late.", "Seymour Cray"],
	["To iterate is human, to recurse divine.",  "L. Peter Deutsch"],
	["Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.", "Linus Torvalds"],
	["Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "Martin Golding"],
	["There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.", "C.A.R. Hoare"],
	["If it's a good idea, go ahead and do it. It is much easier to apologize than it is to get permission.", "Grace Hopper"]
];

function newQuote() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	
	document.getElementById('blockquote').innerHTML = quotes[randomNumber][0];
	document.getElementById('blockquotefooter').innerHTML = quotes[randomNumber][1];
	
	var tweetQuote = quotes[randomNumber][0] + " - " + quotes[randomNumber][1]
	tweetQuote = tweetQuote.split(' ').join('%20');
	tweetQuote = tweetQuote.split('<br>').join('');
	tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('');
   	$('.twitter-share-button').attr('href', tweetQuote);
}

// date function
function startDate() {
	var d = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	document.getElementById("date").innerHTML = 
	days[d.getDay()]+" | "+d.getDate()+"/"+[d.getMonth()+1]+"/"+d.getFullYear();
}

// time function
function startTime() {
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	var ampm = "";
	m = checkTime(m);

	if (h > 12) {
		h = h-12;
		ampm = " PM";
	} else if (h == 12) {
		h = 12;
		ampm = " AM";
	} else if (h < 12) {
		ampm = " AM";
	} else {
		ampm = "PM";
	}

	document.getElementById('display').innerHTML = h+":"+m+ampm;
	var t = setTimeout(function(){startTIme()},500);
}

function checkTime(i) {
	if (i<10) {i = "0" + i};
	return i;
}