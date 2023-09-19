var drumlenght = document.querySelectorAll(".drum").length;

for (var i = 0; i <drumlenght; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    Sound(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  Sound(event.key);
});
function Sound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-0.mp3");
      tom1.play();
      if (d == "w") {
        plus();
      }else{
        minus();
      }
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-1.mp3");
      tom2.play();
      if (d == "a") {
        plus();
      }else{
        minus();
      }
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-2.mp3');
      tom3.play();
      if (d == "s") {
        plus();
      }else{
        minus();
      }
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-3.mp3');
      tom4.play();
      if (d == "d") {
        plus();
      }else{
        minus();
      }
      break;

    case "j":
      var snare = new Audio('sounds/tom-4.mp3');
      snare.play();
      if (d == "j") {
        plus();
      }else{
        minus();
      }
      break;

    case "k":
      var crash = new Audio('sounds/tom-5.mp3');
      crash.play();
      if (d == "k") {
        plus();
      }else{
        minus();
      }
      break;

    case "l":
      var kick = new Audio('sounds/tom-6.mp3');
      kick.play();
      if (d == "l") {
        plus();
      }else{
        minus();
      }
      break;

    default: console.log(key);
  }
}
  
// var h1 = document.getElementById("h1");
// var h2 = document.getElementById("h2");
// h2.textContent = 0;
// var c = 1;
// h1.addEventListener("click" , function () {
//   h2.textContent = c;
//   c++;
//   console.log(c);
// });
var c = 1;
h1.textContent = 0;
function plus() {
  var h1 = document.getElementById("h1");
  h1.textContent = c;
  c++;
  console.log(c);
}
function minus() {
  var h1 = document.getElementById("h1");
  h1.textContent = c;
  c--;
  console.log(c);
}

// var q = 0;
// h2.textContent = 0;
// function clickme2() {
//   var array = ["w" , "a" , "s" , "d" , "j" , "k" ,"l"]
//   var h2 = document.getElementById("h2");
//   h2.textContent = array[q];
//   q++;
//   console.log(q);
// }
// var d = prompt();
var btn = document.getElementById("btn");
btn.addEventListener("click" , function () {
  setTimeout(function () {
    d  = "a";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 1000);
  
  setTimeout(function () {
    d  = "s";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 2000);
  
  setTimeout(function () {
    d  = "s";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 3000);
  
  setTimeout(function () {
    d  = "w";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 4000);
  
  setTimeout(function () {
    d  = "d";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 5000);
  
  setTimeout(function () {
    d  = "a";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 6000);
  
  setTimeout(function () {
    d  = "l";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 7000);
  setTimeout(function () {
    d  = "a";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 8000);
  
  setTimeout(function () {
    d  = "d";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 9000);
  
  setTimeout(function () {
    d  = "d";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 10000);
  
  setTimeout(function () {
    d  = "l";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 11000);
  
  setTimeout(function () {
    d  = "a";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 12000);
  
  setTimeout(function () {
    d  = "k";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 13000);
  
  setTimeout(function () {
    d  = "l";
    var h2 = document.getElementById("h2");
    h2.textContent = d;
  }, 14000);
  setTimeout(function () {
    var h2 = document.getElementById("h2");
    h2.textContent = "#";
  }, 15000);
})