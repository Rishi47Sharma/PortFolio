let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let rocks = document.getElementById("rocks");
//   let forest = document.getElementById("forest");
let water = document.getElementById("water");
let header = document.getElementById("header");
let fish1 = document.getElementById("fish1");
const drop1 = document.querySelector("#drop__1");
console.log(drop1);
const swiftUpElements = document.querySelectorAll(".swift-up-text");
console.log(swiftUpElements);

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.top = 40 + value * -0.1 + "%";
  bird1.style.top = value * -1.5 + "px";
  bird1.style.left = value * +2 + "px";
  bird2.style.top = value * -1.5 + "px";
  bird2.style.left = value * -2 + "px";

  fish1.style.right = -300 + value;
  console.log(value);
  swift(swiftUpElements);
  console.log(swiftUpElements);
});

const swift = (para) => {
  para.forEach((elem) => {
    console.log(elem);
    const words = elem.textContent.split(" ");

    elem.innerHTML = "";

    words.forEach((el, index) => {
      words[index] = `<span><i>${words[index]}</i></span>`;
    });
    console.log(words.join(""));

    elem.innerHTML = words.join(" ");

    const children = document.querySelectorAll("span > i");
    children.forEach((node, index) => {
      node.style.animationDelay = `${index * 0.25}s`;
    });
  });
};
