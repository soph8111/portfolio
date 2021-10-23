"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  arrowDown();
  startDrawingLine();
  cooltext();
}

function arrowDown() {
  const properties = {
    duration: 800,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-out",
  };

  const keyframes = [{ transform: `translate(0, 1vw)` }, { tranform: `transform: translate(0,0)` }];

  const arrow = document.querySelector("#arrow_down");
  const animation = arrow.animate(keyframes, properties);

  arrow.addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: "#work" });
  });
}

function startDrawingLine() {
  // Draw line inspired by https://css-tricks.com/scroll-drawing/

  // Get a reference to the <path>
  const path = document.querySelector("#guideline");

  // Get total length of path
  const pathLength = path.getTotalLength();
  //console.log(pathLength);

  // Make very long dashes (the length of the path itself)
  path.style.strokeDasharray = pathLength + " " + pathLength;

  // Offset the dashes so the it appears hidden entirely
  path.style.strokeDashoffset = pathLength;

  // When the page scrolls...
  window.addEventListener("scroll", function (e) {
    // What % down is it?
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // Length to offset the dashes
    const drawLength = pathLength * scrollPercentage;
    const newLength = drawLength - window.innerHeight / 2;
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - newLength;
  });
}

function cooltext() {
  const text = document.querySelector(".cooltext").textContent; // Henter tekst der skal udskrives

  // Opretter variabler
  let maxNumbersOfIterations; // Variabel der skal tælles på
  let iterator;
  let output;

  init();

  function init() {
    document.querySelector(".cooltext").innerHTML = "";
    maxNumbersOfIterations = text.length; // Loopet skal køre det antal gange, som teksten indholder karakterer.
    iterator = 0;
    loop(); // Kalder på  loopet
  }

  function loop() {
    iterator++; // Plusser én til hver gang loopet har kørt

    // Så længe iterator er mindre end eller lig med antallet af bogstaver/karaktere
    if (iterator <= maxNumbersOfIterations) {
      setTimeout(loop, 90); // Sætter delay på loopet (0,25 sekunder

      output = text.substring(iterator, iterator - 1);

      // create a new span element
      const newSpan = document.createElement("span");
      // give class
      newSpan.className = "letter";
      // and give it some content
      const newContent = document.createTextNode(output);

      newSpan.appendChild(newContent);
      document.querySelector(".cooltext").appendChild(newSpan);
    }
    animateText();
  }

  function animateText() {
    document.querySelectorAll(".letter").forEach((elm, i) => {
      if (elm.innerHTML.includes(" ")) {
        elm.innerHTML = elm.innerHTML.replace(" ", "&nbsp");
      }
      elm.classList.add("fade_text");
    });
  }
}
