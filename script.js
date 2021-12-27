// Variables
const imageBg = document.querySelector(".image");
const hoverBg = document.querySelector(".hover-bg");
const cubeImage = document.querySelector(".cube-image");
const viewIcon = document.querySelector(".view-icon");
// Cube images hover state
hoverBg.onmouseover = function (event) {
  let target = event.target;
  target.style.backgroundColor = "hsla(178, 100%, 50%, 0.5)";
  viewIcon.classList.remove("hidden");
};
// Cube images unhover state (reset to initial state)
hoverBg.onmouseout = function (event) {
  let target = event.target;
  target.style.backgroundColor = "";
  viewIcon.classList.add("hidden");
};
