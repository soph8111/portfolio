"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  fadeIn();
  //arrowUp();
}

function fadeIn() {
  // Inspired by: https://www.youtube.com/watch?v=19jD-DcOBtQ

  const images = document.querySelectorAll(".image");

  images.forEach((img) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.classList.add("fade_in");
        }
      });
    });

    observer.observe(img);
  });
}

/* function arrowUp() {
  const arrow = document.querySelector("#to_top");

  arrow.addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  });
} */
