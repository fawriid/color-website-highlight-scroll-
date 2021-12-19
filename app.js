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
