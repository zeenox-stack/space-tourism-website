import {
  techContent,
  navStyle,
  getValues,
  splitLink,
} from "./functionality.js";

const values = splitLink(window.location.href, true);
techContent(values[0], values[1], document.body).then(() => {
  const mainNav = document.querySelector(".nav-open");
  const nav = document.querySelector(".main-nav");

  mainNav.addEventListener("click", () => {
    navStyle(nav);

    mainNav.src = `../assets/shared/icon-${
      mainNav.src.includes("hamburger") ? "close" : "hamburger"
    }.svg`;
  });

  getValues(".main-nav", "nav");
  getValues(".page-nav", "secondary");

  const navLink = document.querySelectorAll(".page-nav > a");
  navLink.forEach((link) => (link.style.opacity = 0));

  setTimeout(() => {
    const img = document.querySelector(".images > img");

    if (img) {
      img.style.animation = "slideRight 1s 1 ease";
    }

    if (navLink) {
      navLink.forEach((link) => {
        link.style.opacity = 1;
        link.style.animation =
          window.innerWidth <= 425
            ? "slideRight 1s 1 ease"
            : "onLoad 1s 1 ease";
      });
    }
  }, 1000);
});
