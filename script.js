"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  arrowDown();
  arrowUp();
  /*   setLineView();
  startDrawingLine(); */
  fadeIn();
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

function arrowUp() {
  const arrow = document.querySelector("#to_top");

  gsap.from(arrow, { scale: 0.7, opacity: 0, scrollTrigger: { trigger: arrow, scrub: true, start: "-50px 90%", end: "50% 80%" } });

  arrow.addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  });
}

function setLineView() {
  console.log("test");

  const line = document.querySelector("#line-svg");
  line.setAttribute("viewBox", `0 0 1200 2250`);
  line.setAttribute("d", "m 1 67 c 236 12 405 186 289 251 c -302 162 -223 176 -63 253 c 205 107 36 121 -67 177 c -309 163 3 170 75 188 c 104 16 150 30 79 228");

  /* const line = document.querySelector("#line-svg");
  const section = document.querySelector("#work");
  const rect = section.getBoundingClientRect();

  const width = section.offsetWidth;
  const height = rect.height;

  console.log(width);

  console.log(height);

  line.setAttribute("viewBox", `0 0 ${width} 1850`);
  line.setAttribute("width", `${width}px`);
  line.setAttribute("height", `1850px`); */
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
    // const newLength = drawLength - window.innerHeight / 2;
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
  });
}

function fadeIn() {
  gsap.from("#work1", { y: "200px", opacity: 0, scrollTrigger: { trigger: "#work1", scrub: true, start: "top bottom", end: "20% 65%" } });
  gsap.from("#work2", { y: "200px", opacity: 0, scrollTrigger: { trigger: "#work2", scrub: true, start: "top bottom", end: "20% 65%" } });
  gsap.from("#work3", { y: "200px", opacity: 0, scrollTrigger: { trigger: "#work3", scrub: true, start: "top bottom", end: "20% 65%" } });
  gsap.from("#work4", { y: "200px", opacity: 0, scrollTrigger: { trigger: "#work4", scrub: true, start: "top bottom", end: "20% 65%" } });
  gsap.from("#work5", { y: "200px", opacity: 0, scrollTrigger: { trigger: "#work5", scrub: true, start: "top bottom", end: "20% 65%" } });
}

/* function fadeIn() {
  // Inspired by: https://www.youtube.com/watch?v=19jD-DcOBtQ

  const projects = document.querySelectorAll(".cooltext");

  projects.forEach((project) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          project.classList.add("fade_text");
        }
      });
    });

    observer.observe(project);
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
} */
