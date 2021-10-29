"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  fadeIn();
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
