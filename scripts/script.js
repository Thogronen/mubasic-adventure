// JavaScript Document
console.log("You spooked me!");

// var voor menu knop
// var menuBtn = document.querySelector('button');
var button = document.querySelector('button');

// de content van het menu (div)
// var navToggle = document.querySelector("nav");
var element = document.querySelector("nav");

// var voor body
var scrollLock = document.querySelector("body");



// execute funtion toggleMenu on menuBtn (header button) click
// menuBtn.addEventListener("click", toggleMenu);
button.addEventListener("click", toggleMenu);

function toggleMenu() {
    // toggle: menuOpen will prevent overflow, disabling scrolling
    // add .menuOpen to body  
    scrollLock.classList.toggle("menuOpen");

    // toggle: menuContent will make the contents of the menu visible.
    // add .menuContent to nav
    // navToggle.classList.toggle("menuContent");
    element.classList.toggle("menuContent");
}