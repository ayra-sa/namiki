// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const hero = document.querySelector(".hero")
// const main = document.querySelector(".main")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // hero.classList.toggle('on')
    // main.classList.toggle('on')
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    // hero.classList.remove('on')
    // main.classList.remove('on')
}