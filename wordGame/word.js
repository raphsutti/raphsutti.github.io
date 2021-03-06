const squares = document.querySelectorAll(".square");
let resultArray = [];
const url = window.location.href.match(/\?.+=([^&]*)/);
let urlParam;
const questionsArray = [
  "ngclfuyeaulr",
  "iscmnrdteaep",
  "stcciasoinde",
  "naaldgiviitn",
  "yelmhctaialp",
  "lutfnearngit",
  "enpsdonrgevi",
  "iailbdscvtiay",
  "teetsorhrbps"
];

if (url != null) {
  urlParam = window.location.href.match(/\?.+=([^&]*)/)[1];
} else {
  urlParam =
    questionsArray[Math.floor(Math.random() * (questionsArray.length - 1))];
  text =
    "Refresh the page with '?q=[word]' at the end of the url to input your own word";
  info = document.querySelector("#info");
  info.textContent = text;
}

const answerArray = [];
const answerBlock = document.querySelector("#displayAnswer");

resultArray = urlParam.toUpperCase().split("");
resultArray.sort(() => Math.random() - 0.5)
for (var i = 0; i < resultArray.length; i++) {
  character = resultArray[i];
  squares[i].textContent = character;
  squares[i].classList.add(`box${character}`);
  squares[i].id = i+character;
  squares[i].addEventListener("click", function() {
    const char = this.id.substr(this.id.length - 1)

    if (this.classList.contains("active")) {
      answerArray.push(char);
      this.classList.add("grey");
      this.classList.remove("active");

      if (answerArray.length === 12) {
        document.querySelector("#yay").textContent = "🎉";
      }

    } else {
      const index = answerArray.indexOf(char);
      if (index > -1) {
        answerArray.splice(index, 1);
        this.classList.add("active");
        this.classList.remove("grey");

      }
    }

    answerBlock.textContent = answerArray.join("");
  } );
  
}

for (var i = 0; i < resultArray.length; i++) {
  squares[i].classList.add("active");
}

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
  }
  answerBlock.textContent = answerArray.join("");
});
