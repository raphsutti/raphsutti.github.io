const squares = document.querySelectorAll(".square");
let resultArray = [];
const url = window.location.href.match(/\?.+=([^&]*)/);
let urlParam;

if (url != null) {
  urlParam = window.location.href.match(/\?.+=([^&]*)/)[1];
  resultArray = urlParam.toUpperCase().split("");
  for (var i = 0; i < resultArray.length; i++) {
    character = resultArray[i];
    squares[i].textContent = character;
    squares[i].classList.add(`box${character}`);
  }
  for (var i = 0; i < resultArray.length; i++) {
    squares[i].classList.add("active");
  }

  const answerBlock = document.querySelector("#displayAnswer");
  const answerArray = [];
  document.addEventListener("keydown", event => {
    key = event.keyCode;
    char = String.fromCharCode(key);
    if (answerArray.length <= 11 && char.match(/[a-z]/i)) {
      index = resultArray.indexOf(char);
      if (index > -1) {
        resultArray.splice(index, 1);
        answerArray.push(char);
        current = document.querySelector(`.box${char}.active`);
        current.classList.add("grey");
        current.classList.remove("active");
        if (answerArray.length === 12) {
          document.querySelector("#yay").textContent = "🎉";
        }
      }
    }
    if (key == 8) {
      char = answerArray.pop();
      resultArray.push(char);
      current = document.querySelector(`.box${char}.grey`);
      current.classList.remove("grey");
      current.classList.add("active");
      if (answerArray.length === 11) {
        document.querySelector("#yay").textContent = "";
      }
    }
    answerBlock.textContent = answerArray.join("");
  });
} else {
  text =
    "Refresh the page with '?q=[word]' at the end of the url to play the game";
  info = document.querySelector("#info");
  info.textContent = text;
}
