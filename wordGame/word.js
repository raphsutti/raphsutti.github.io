const squares = document.querySelectorAll(".square");

const selectElement = document.querySelector("#input");
selectElement.addEventListener("change", event => {
  resultArray = event.target.value.split("");
  for (var i = 0; i < resultArray.length; i++) {
    squares[i].textContent = event.target.value[i];
  }
});
