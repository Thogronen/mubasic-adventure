// JavaScript Document
console.log("This website is a copy of hound-studio.com as part of an assignment. All rights go to the original owner.");

// var voor menu knop
// var menuBtn = document.querySelector('button');
var button = document.querySelector('button');

// de content van het menu (div)
// var navToggle = document.querySelector("nav");
var navBtn = document.querySelector("nav");

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
    navBtn.classList.toggle("menuContent");
}






var button = document.querySelector('button');
var navBtn = document.querySelector("nav");
var scrollLock = document.querySelector("body");

button.addEventListener("click", toggleMenu);

function toggleMenu() {
    scrollLock.classList.toggle("noScroll");
    navBtn.classList.toggle("menuContent");
}