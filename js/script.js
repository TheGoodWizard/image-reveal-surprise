// ****====---- Introduction to JavaScript: Lesson 07: Practice Exercise #1 ----====****

// ***===--- Exercise #1: ---===*** //

// Skills Practiced: querySelector(), keydown event, callback function, conditional statements, innerText //

var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");
var button = document.querySelector("button");

document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    box1.innerText = "🧙";
  } else if (e.key === "2") {
    box2.innerText = "🌘";
  } else if (e.key === "3") {
    box3.innerText = "⚖️";
  }
});

// ***===--- Exercise #2: ---===*** //

// Skills Practiced: querySelector(), click event, innerText //

button.addEventListener("click", function () {
  box1.innerText = "1";
  box2.innerText = "2";
  box3.innerText = "3";
});
