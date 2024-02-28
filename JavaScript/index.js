let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let fish = document.getElementById("fish");
const swiftUpElements = document.querySelectorAll(".swift-up-text");
const mainContainer = document.querySelector(".main-container");
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    mainContainer.style.display = "block";
  }, 1800);
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.top = 40 + value * -0.1 + "%";
  bird1.style.top = value * -1.5 + "px";
  bird1.style.left = value * +2 + "px";
  bird2.style.top = value * -1.5 + "px";
  bird2.style.left = value * -2 + "px";
  fish.style.right = -300 + value;
  swift(swiftUpElements);
});
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
const swift = (para) => {
  para.forEach((elem) => {
    // const words = elem.textContent.split(" ");
    const words = elem.textContent
      .split(" ")
      .filter((word) => word.trim() !== "");

    elem.innerHTML = "";

    words.forEach((el, index) => {
      words[index] = `<span><i>${words[index]}</i></span>`;
    });
    // console.log(words.join(""));

    elem.innerHTML = words.join(" ");

    const children = document.querySelectorAll("span > i");

    children.forEach((node, index) => {
      node.style.animationDelay = `${index * 0.25}s`;
    });
  });
};
// const bubble1 = document.querySelector("#bubble1");
// const bubble2 = document.querySelector("#bubble2");
// const bubble3 = document.querySelector("#bubble3");
// const bubble4 = document.querySelector("#bubble4");
// const bubble5 = document.querySelector("#bubble5");

// bubble2.addEventListener("click", (e) => {
//   if (e.target.classList.contains("bubble-animation-y")) {
//     e.target.classList.remove("bubble-animation-y");
//     bubble2.style.top = "0px";
//   }
// });
// bubble3.addEventListener("click", (e) => {
//   if (e.target.classList.contains("bubble-animation-y")) {
//     e.target.classList.remove("bubble-animation-y");
//     bubble3.style.top = "0px";
//   }
// });
// bubble4.addEventListener("click", (e) => {
//   if (e.target.classList.contains("bubble-animation-y")) {
//     e.target.classList.remove("bubble-animation-y");
//     bubble4.style.top = "0px";
//   }
// });
// bubble5.addEventListener("click", (e) => {
//   if (e.target.classList.contains("bubble-animation-y")) {
//     e.target.classList.remove("bubble-animation-y");
//     bubble5.style.bottom = "250px";
//   }
// });
// bubble1.addEventListener("click", (e) => {
//   if (e.target.classList.contains("bubble-animation-y")) {
//     e.target.classList.remove("bubble-animation-y");
//     bubble1.style.bottom = "250px";
//   }
// });
const bubbles = Array.from({ length: 5 }, (_, i) =>
  document.querySelector(`#bubble${i + 1}`)
);

bubbles.forEach((bubble, index) => {
  bubble.addEventListener("click", (e) => {
    if (e.target.classList.contains("bubble-animation-y")) {
      e.target.classList.remove("bubble-animation-y");
      if (index === 0 || index === 4) {
        bubble.style.bottom = "250px";
      } else {
        bubble.style.top = "0px";
      }
    }
  });

  bubble.addEventListener("mouseenter", () => {
    bubble.style.cursor = "pointer";
  });

  bubble.addEventListener("mouseleave", () => {
    bubble.style.cursor = "default";
  });
});
