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

const navLink = document.querySelectorAll(".link-item");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    // hero.classList.remove('on')
    // main.classList.remove('on')
}

// Navbar on scroll

const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 500) {
        navbar.classList.add('nav-colored');
    } else {
        navbar.classList.remove('nav-colored');
    }
};

// cookies

const cookies = document.querySelector('.cookies')
const closeBtn = document.querySelector('.close')

closeBtn ? closeBtn.addEventListener("click", closeBox) : false

function closeBox() {
    cookies.style.display = 'none';
}

// faq

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling
    panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block"
    
  });
}


let cards = document.querySelectorAll('.hc-item')
    
function liveSearch() {
    let search_query = document.getElementById("search").value;
    
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {    
        cards[i].textContent.toLowerCase().includes(search_query.toLowerCase()) ? cards[i].classList.remove("is-hidden") : cards[i].classList.add("is-hidden")
    }
}

//A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});