// NAVBAR FOR MOBILE
const navLinks = document.querySelector(".nav__wrapper .nav__links");
const mobileNav = document.querySelector("#mobile__nav");
const bars = document.querySelectorAll(".bars");

const mobileNavbar = () => {
  navLinks.classList.toggle("active");
  bars.forEach((e) => {
    e.classList.toggle("is-active");
  });
};
mobileNav.addEventListener("click", mobileNavbar);

// HIDING NAVBAR
const hideMobileNav = () => {
  const mobileBars = document.querySelector(".is-active");
  if (window.innerWidth <= 1024 && mobileBars) {
    bars.forEach((e) => {
      e.classList.toggle("is-active");
    });
    navLinks.classList.remove("active");
  }
};
const logo = document.querySelector(".nav__logo");
logo.addEventListener("click", hideMobileNav);
navLinks.addEventListener("click", hideMobileNav);

// HIGHLIGHT FOR NAVBAR ITEM
const scroolHighlight = () => {
  const elem = document.querySelector(".highlight");
  const home = document.querySelector("#home-page");
  const about = document.querySelector("#about-page");
  const services = document.querySelector("#services-page");
  const signup = document.querySelector("#signup-page");
  const webWidth = window.innerWidth;
  let scrollPos = window.scrollY;
  if (webWidth > 1024 && scrollPos < 725) {
    home.classList.add("highlight");
    about.classList.remove("highlight");
    return;
  } else if (webWidth > 1024 && scrollPos < 1525) {
    home.classList.remove("highlight");
    about.classList.add("highlight");
    services.classList.remove("highlight");
    return;
  } else if (webWidth > 1024 && scrollPos < 2300) {
    services.classList.add("highlight");
    about.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("click", scroolHighlight);
window.addEventListener("scroll", scroolHighlight);
