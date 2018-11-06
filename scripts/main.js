var newText = document.querySelector(".message-box");
var newTweets = document.querySelector(".tweets");
var button = document.querySelector(".btn");
var contNumber = document.querySelector(".contNumber");
var char = 140;
var numChar;

function textLength() {
  numChar = newText.value.length;
  if (numChar) {
    contNumber.textContent = char - numChar;
  } else {
    contNumber.textContent = char;
  }
}

function textColorLength() {
  if (numChar >= 120 && numChar < 130) {
    contNumber.style.color = "orange";
  } else if (numChar >= 130 && numChar < 140) {
    contNumber.style.color = "orangered";
  } else if (numChar > 140) {
    contNumber.style.color = "#b4b1b1";
  } else if (numChar < 120) {
    contNumber.style.color = "#3991F5";
  }
}

function disableBtn() {
  if (newText.value.trim() !== "" && numChar <= 140) {
    button.removeAttribute("disabled", "false");
  } else if (newText.value.trim() === "" || numChar > 140) {
    button.setAttribute("disabled", "true");
  }
}

function autoResize() {
  newText.style.height = "40px";
  newText.style.height = newText.scrollHeight + "px";
}

function addTweet() {
  var novaDiv = document.createElement("div");
  var novoPar = document.createElement("p");
  var horario = document.createElement("p");
  novoPar.textContent = newText.value;
  horario.textContent = moment().format('L') + ' ' + moment().format('LT');
  novaDiv.setAttribute("class", "posts");
  newTweets.prepend(novaDiv);
  novaDiv.appendChild(novoPar);
  horario.setAttribute('class', 'hours')
  novaDiv.appendChild(horario);
  newText.value = "";
  contNumber.textContent = char;
  disableBtn();
  autoResize()

}

function textTweet() {
  textLength();
  textColorLength();
  disableBtn();
  autoResize();
}

newText.addEventListener("keypress", textTweet);
newText.addEventListener("keyup", textTweet);
newText.addEventListener("keydown", textTweet);
button.addEventListener("click", addTweet);