import { navStyle, getValues } from "./functionality.js";

const navOpener = document.querySelector(".nav-open");
const nav = document.querySelector("nav");

navOpener.addEventListener("click", () => navStyle(nav));
navOpener.src = `./assets/shared/icon-${
  navOpener.src.includes("hamburger") ? "close" : "hamburger"
}.svg`;
document
  .querySelector(".explore")
  .addEventListener(
    "click",
    () => (window.location.href = "destination-moon.html")
  );
getValues("nav", "secondary");
