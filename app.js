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
