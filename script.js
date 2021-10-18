"use strict";

// https://css-tricks.com/scroll-drawing/

// Get a reference to the <path>
const path = document.querySelector("#guideline");

// Get total length of path
const pathLength = path.getTotalLength();
console.log(pathLength);

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
  const newLegth = drawLength - 300;
  // Draw in reverse
  path.style.strokeDashoffset = pathLength - newLegth;
});
