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
  key = event.keyCode;
  char = String.fromCharCode(key);
  if (answerArray.length <= 11 && char.match(/[a-z]/i)) {
    answerArray.push(char);
  } else if (key == 8) {
    answerArray.pop();
  }
  answerBlock.textContent = answerArray.join("");
});

const submit = document.querySelector("#start");
submit.addEventListener("click", event => {});
