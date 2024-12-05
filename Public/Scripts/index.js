import { navStyle, getValues } from "/Scripts/functionality.js";

const navOpener = document.querySelector(".nav-open");
const nav = document.querySelector("nav");

navOpener.addEventListener('click', () => navStyle(nav));
getValues("nav", "secondary");