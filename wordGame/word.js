const squares = document.querySelectorAll(".square");

const button = document.querySelector("#start");
const inputElement = document.querySelector("#input");
let resultArray = [];
inputElement.addEventListener("change", event => {
  resultArray = event.target.value.toUpperCase().split("");
  for (var i = 0; i < resultArray.length; i++) {
    squares[i].textContent = event.target.value[i];
  }
});

const submit = document.querySelector("#start");
submit.addEventListener("click", event => {
  inputElement.classList.add("hidden");
  button.classList.add("hidden");
  const answerBlock = document.querySelector("#displayAnswer");
  const answerArray = [];
  document.addEventListener("keydown", event => {
    key = event.keyCode;
    char = String.fromCharCode(key);
    if (answerArray.length <= 11 && char.match(/[a-z]/i)) {
      index = resultArray.indexOf(char);
      console.log(index);
      if (index > -1) {
        resultArray.splice(index, 1);
        answerArray.push(char);
      }
    } else if (key == 8) {
      resultArray.push(answerArray.pop());
    }
    answerBlock.textContent = answerArray.join("");
  });
});
