const squares = document.querySelectorAll(".square");

const inputElement = document.querySelector("#input");
inputElement.addEventListener("change", event => {
  resultArray = event.target.value.split("");
  for (var i = 0; i < resultArray.length; i++) {
    squares[i].textContent = event.target.value[i];
  }
});

const guess = document.querySelector("#answer");
const answerBlock = document.querySelector("#displayAnswer");
const answerArray = [];
guess.addEventListener("keydown", event => {
  char = String.fromCharCode(event.keyCode);
  answerArray.push(char);
  answerBlock.textContent = answerArray.join("");
});
