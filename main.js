var newText = document.querySelector(".message-box");
var newTweets = document.querySelector(".tweets");
var button = document.querySelector(".btn");
var contNumber = document.querySelector(".contNumber");
var span = document.querySelector("span");
var char = 140;
var counter = 0;
var numChar;


function addTweet() {
  var novaDiv = document.createElement("div");
  var novoPar = document.createElement("p");
  novoPar.textContent = newText.value;
  novaDiv.setAttribute("class", "posts");
  newTweets.prepend(novaDiv);
  novaDiv.appendChild(novoPar);
  newText.value = "";
}
button.addEventListener("click", addTweet);


function charScore(){
  numChar = newText.value.length;
  if(numChar){
    contNumber.textContent = char - numChar;
  } else {
    contNumber.textContent = char;
  }

  if(numChar >= 120 && numChar < 130){
    contNumber.style.color = "orange";
  } else if(numChar >= 130 && numChar < 140){
    contNumber.style.color = "orangered";
  } else if(numChar > 140){
    contNumber.style.color = "#b4b1b1";
  } else if(numChar < 120){
    contNumber.style.color = "#3991F5";
  }

  if (newText.value !== "" && numChar <= 140){
    button.removeAttribute("disabled", "false");
  } else if (newText.value === "" || numChar > 140){
    button.setAttribute("disabled", "true");
  }
}
newText.addEventListener("keypress",charScore);
newText.addEventListener("keyup",charScore);
newText.addEventListener("keydown",charScore);


