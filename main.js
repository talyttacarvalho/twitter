var newText = document.querySelector(".message-box");
var newTweets = document.querySelector(".tweets");
var button = document.querySelector(".btn");

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