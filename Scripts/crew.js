import {
  crewContent,
  navStyle,
  getValues,
  setLink,
  setActiveClass,
  splitLink,
} from "./functionality.js";

const values = mutate(splitLink(window.location.href, true));

crewContent(values[0], values[1], document.body, true).then(() => {
  const mainNav = document.querySelector(".nav-open");
  const nav = document.querySelector(".main-nav");
  const rArrow = document.querySelector(".right-arrow");
  const lArrow = document.querySelector(".left-arrow");

  mainNav.addEventListener("click", () => navStyle(nav));
  mainNav.src = `./assets/shared/icon-${
    mainNav.src.includes("hamburger") ? "close" : "hamburger"
  }.svg`;

  getValues(".main-nav", "nav");
  setLink(rArrow, lArrow);
  setActiveClass(".dots");

  const img = document.querySelector(".image > img");
  img.style.opacity = 0;

  setTimeout(() => {
    img.style.opacity = 1;
    img.style.animation = "slideRight 1s ease";
  }, 1000);
});

function mutate(link) {
  const [...values] = link;
  values[1] = values[1][0].toUpperCase() + values[1].slice(1);
  return values;
}
