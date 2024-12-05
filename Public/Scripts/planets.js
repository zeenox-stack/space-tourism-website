import {
  navStyle,
  contentDeliver,
  getValues,
  splitLink
} from "/Scripts/functionality.js";

const values = mutate(splitLink(window.location.href, true));

contentDeliver(values[0], values[1], document.body).then(() => {
  const navOpener = document.querySelector(".nav-open");
  const nav = document.querySelector(".main-nav");
  navOpener.addEventListener("click", () => navStyle(nav));
  getValues(".main-nav", "nav");
  getValues(".planet-nav", "secondary"); 
  const img = document.querySelector('.planet > img'); 
  img.style.opacity = 0; 
  setTimeout(() => { 
    img.style.opacity = 1;
    img.style.animation = "slideRight 1s ease";
  }, 1000)
});

function mutate(val) {
  const [...values] = val;
  values[0] = values[0] + "s";
  values[1] =
    values[1][0].replace(values[1][0], values[1][0].toUpperCase()) +
    values[1].slice(1);
  return values;
}