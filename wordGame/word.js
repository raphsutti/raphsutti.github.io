const squares = document.querySelectorAll(".square");

const button = document.querySelector("#start");
const inputElement = document.querySelector("#input");
let resultArray = [];
const urlParam = window.location.href.match(/\?q=([^&]*)/)[1];

if (urlParam) {
  resultArray = urlParam.toUpperCase().split("");
  for (var i = 0; i < resultArray.length; i++) {
    character = resultArray[i];
    squares[i].textContent = character;
    squares[i].classList.add(`box${character}`);
  }
}

inputElement.addEventListener("change", event => {
  resultArray = event.target.value.toUpperCase().split("");
  for (var i = 0; i < resultArray.length; i++) {
    character = event.target.value[i];
    squares[i].textContent = character;
    squares[i].classList.add(`box${character}`);
  }
});

const submit = document.querySelector("#start");
submit.addEventListener("click", event => {
  inputElement.classList.add("hidden");
  button.classList.add("hidden");
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
      }
    }
    if (key == 8) {
      char = answerArray.pop();
      resultArray.push(char);
      current = document.querySelector(`.box${char}.grey`);
      current.classList.remove("grey");
      current.classList.add("active");
    }
    answerBlock.textContent = answerArray.join("");
  });
});
