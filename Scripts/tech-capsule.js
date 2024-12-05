import { techContent, navStyle, getValues } from "./functionality.js";

techContent("technology", "Space capsule", document.body).then(() => {
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
});
