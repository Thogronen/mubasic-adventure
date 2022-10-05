// JavaScript Document
console.log("You spooked me!");

// var voor menu knop
var menuBtn = document.querySelector('button');

// var voor body
var scrollLock = document.querySelector("body");

// de content van het menu 
var navToggle = document.querySelector("nav")


// execute funtion toggleMenu on menuBtn (header button) click
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    // toggle: menuOpen will prevent overflow, disabling scrolling
    scrollLock.classList.toggle("menuOpen");

    // toggle: menuContent will make the contents of the menu visible.
    navToggle.classList.toggle("menuContent")
}