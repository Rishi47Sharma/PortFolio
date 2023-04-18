let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let rocks = document.getElementById("rocks");
//   let forest = document.getElementById("forest");
let water = document.getElementById("water");
let header = document.getElementById("header");
let fish1 = document.getElementById("fish1");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.top = 40 + value * -0.1 + "%";
  bird1.style.top = value * -1.5 + "px";
  bird1.style.left = value * +2 + "px";
  bird2.style.top = value * -1.5 + "px";
  bird2.style.left = value * -2 + "px";

  // fish1.style.right = -300 + value;
  console.log(value);
});