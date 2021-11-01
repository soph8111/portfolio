"use strict";

const cursor = document.querySelector(".cursor");
const a = document.querySelectorAll("a, .a");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute("style", "top: " + (e.pageY - 8) + "px; left: " + (e.pageX - 8) + "px");
});

a.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
});

a.forEach((link) => {
  link.addEventListener("mouseout", () => {
    cursor.classList.remove("hover");
  });
});
