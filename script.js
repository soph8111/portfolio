"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  arrowDown();

  startDrawingLine();
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
