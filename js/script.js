
'use strict';
/*
window.onresize = screen;
window.onload = screen;

function screen() {
    myWidth = window.innerWidth;

    document.getElementById('size').innerHTML
        = "width : " + myWidth + "px";
}
*/
// navbar toggle


const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLink = document.querySelector("[data-nav-link]");

const navToggleFunc = function () {
    navToggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].addEventListener("click", navToggleFunc);
}


// Header Active on scroll
/*

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    this.window.scrollY >= 10 ? header.classList.add("active") :
        header.classList.remove("active");
});


$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });
});
*/

const header = document.querySelector("[data-header]");

window.onscroll = function () {
    let top = window.scrollY;
    if (top >= 10) {
        header.classList.add("active")
    } else {
        header.classList.remove("active");
    }

};