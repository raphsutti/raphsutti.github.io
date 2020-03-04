const squares = document.querySelectorAll(".square");

const button = document.querySelector("#start");
const inputElement = document.querySelector("#input");
inputElement.addEventListener("change", event => {
  resultArray = event.target.value.split("");
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
      answerArray.push(char);
    } else if (key == 8) {
      answerArray.pop();
    }
    answerBlock.textContent = answerArray.join("");
  });
});
