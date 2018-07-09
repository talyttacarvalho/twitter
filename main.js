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
  numChar = document.querySelector(".message-box").value.length;
  if(numChar){
    contNumber.textContent = char - numChar;
  } else if (newText.value === ""){
    contNumber.textContent = char;
  }
}
newText.addEventListener("keydown",charScore);
newText.addEventListener("keyup",charScore);  
newText.addEventListener("keypress",charScore);

function disableBtn(){
  var numChar = document.querySelector(".message-box").value.length;
    if (newText.value !== "" && numChar <= 140){
      button.removeAttribute("disabled", "false");
    } else if (newText.value === "" || numChar > 140){
      button.setAttribute("disabled", "true");
    }
}
setInterval(disableBtn, 1);
