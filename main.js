var newText = document.querySelector(".message-box");
var newTweets = document.querySelector(".tweets");
var button = document.querySelector(".btn");
var span = document.querySelector("span");

var char = 140;


function addTweet() {
  var novaDiv = document.createElement("div");
  var novoPar = document.createElement("p");
  novoPar.textContent = newText.value;
  novaDiv.setAttribute("class", "posts");
  newTweets.prepend(novaDiv);
  novaDiv.appendChild(novoPar);
  newText.value = "";
  disableBtn();
}

function verifyContent() {
  if(newText.value){
    button.removeAttribute("disabled");
  }
  char--;
  span.textContent = char;
}

button.addEventListener("click", addTweet);
newText.addEventListener("keypress", verifyContent);

function disableBtn() {
  if (!newText.value) {
    button.setAttribute("disabled",true);
  } 
}

function loadpage(){
  disableBtn();
  span.textContent = char;
}

window.onload = loadpage;