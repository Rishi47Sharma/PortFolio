let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let rocks = document.getElementById("rocks");
//   let forest = document.getElementById("forest");
let water = document.getElementById("water");
let header = document.getElementById("header");
let fish1 = document.getElementById("fish1");
const drop1 = document.querySelector("#drop__1");
const HeaderContainer = document.querySelector("#header-container");

const homePageContainer = document.querySelector("#home-page-container");
const aboutMeContainer = document.querySelector("#about-me-container");
const projectContainer = document.querySelector("#project-container");
const bubbleHolder = document.querySelector("#bubble");
const footer = document.querySelector("#footer");
const preloader = document.querySelector("#preloader");
// console.log(drop1);
const swiftUpElements = document.querySelectorAll(".swift-up-text");

// console.log(swiftUpElements);

window.addEventListener("load", function () {
  this.setTimeout(() => {
    preloader.classList.add("hide-preloader");
    homePageContainer.classList.remove("home-page-conatiner");
    aboutMeContainer.classList.remove("about-me-container");
    projectContainer.classList.remove("project-container");
    bubbleHolder.classList.remove("bubble");
    footer.classList.remove("footer-remove");
    HeaderContainer.classList.remove("Header-container");
  }, 2000);
  // console.log();
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.top = 40 + value * -0.1 + "%";
  bird1.style.top = value * -1.5 + "px";
  bird1.style.left = value * +2 + "px";
  bird2.style.top = value * -1.5 + "px";
  bird2.style.left = value * -2 + "px";

  fish1.style.right = -300 + value;
  // console.log(value);
  swift(swiftUpElements);
  // console.log(swiftUpElements);
});

const swift = (para) => {
  para.forEach((elem) => {
    // console.log(elem);
    const words = elem.textContent.split(" ");

    elem.innerHTML = "";

    words.forEach((el, index) => {
      words[index] = `<span><i>${words[index]}</i></span>`;
    });
    // console.log(words.join(""));

    elem.innerHTML = words.join(" ");

    const children = document.querySelectorAll("span > i");

    children.forEach((node, index) => {
      console.dir(node);
      node.style.animationDelay = `${index * 0.25}s`;
    });
  });
};

// let innerSlider = document.querySelector(".inner-slider");

// let pressed = false;
// let startX;
// let x;
// sliderContainer.addEventListener("mousedown", (e) => {
//   pressed = true;
//   startX = e.offsetX - innerSlider.offsetLeft;
//   sliderContainer.style.cursor = "grabbing";
//   innerSlider.style.pointerEvents = "none";
// });
// sliderContainer.addEventListener("mouseenter", () => {
//   sliderContainer.style.cursor = "grab";
// });
// sliderContainer.addEventListener("mouseup", () => {
//   sliderContainer.style.cursor = "grab";
//   innerSlider.style.pointerEvents = "all";

//   pressed = false;
// });

// const checkBoundary = () => {
//   let outer = sliderContainer.getBoundingClientRect();
//   let inner = innerSlider.getBoundingClientRect();

//   if (parseInt(innerSlider.style.left) > 0) {
//     innerSlider.style.left = "0px";
//   }

//   if (inner.right < outer.right) {
//     innerSlider.style.left = `-${inner.width - outer.width}px`;
//   }
// };
// sliderContainer.addEventListener("mousemove", (e) => {
//   if (!pressed) return;
//   e.preventDefault();

//   x = e.offsetX;

//   innerSlider.style.left = `${x - startX}px`;

//   checkBoundary();
// });

let sliderContainer = document.querySelector(".slider-container");
let innerSlider = document.querySelector(".inner-slider");

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.clientX - innerSlider.getBoundingClientRect().left;
  sliderContainer.style.cursor = "grabbing";
  innerSlider.style.transition = "none"; // Disable transition during drag
});

sliderContainer.addEventListener("mouseenter", () => {
  sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
  sliderContainer.style.cursor = "grab";
  innerSlider.style.transition = ""; // Enable transition after drag
  pressed = false;
});

const checkBoundary = () => {
  let outer = sliderContainer.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (inner.left > outer.left) {
    innerSlider.style.left = "0px";
  }

  if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
};

sliderContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.clientX - startX;
  innerSlider.style.left = `${x}px`;

  checkBoundary();
});
