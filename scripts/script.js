// JavaScript Document
console.log("This website is a copy of hound-studio.com as part of an assignment. All rights go to the original owner.");


var button = document.querySelector('button');
var navBtn = document.querySelector("nav");

var menuMoreItems = document.querySelector("header nav ul li:first-child a");
var menuMoreItemsB = document.querySelector("header nav ul li:last-child a");

var spanSwitch = document.querySelectorAll("span");

var scrollLock = document.querySelector("body");

// button spans
var menuTop = document.querySelector("span.top");
var menuMiddle = document.querySelector("span.middle");
var menuBottom = document.querySelector("span.bottom");



button.addEventListener("click", toggleMenu);

// returns but won't apply class?
console.log(spanSwitch);





// var voor menu knop
var menuBtn = document.querySelector("button");

// body
var scrollLock = document.querySelector("body");

// de content van het menu 
var menuToggle = document.querySelector("nav");


// button spans
var menuTop = document.querySelector("span.top");
var menuMiddle = document.querySelector("span.middle");
var menuBottom = document.querySelector("span.bottom");




// on click element with class .menuBtn, call toggleMenu
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {

    // toggle: 
    menuToggle.classList.toggle("pointerEventsEnabled");

    // toggle: change style for menu button.
    menuTop.classList.toggle("menuBtnOpenState");
    menuMiddle.classList.toggle("menuBtnOpenState");
    menuBottom.classList.toggle("menuBtnOpenState");
    menuBtn.classList.toggle("menuBtnOpenState");

    scrollLock.classList.toggle("noScroll");
    navBtn.classList.toggle("menuContent");
    menuMoreItems.classList.toggle("menuContent");
    menuMoreItemsB.classList.toggle("menuContent");
    spanSwitch.classList.toggle("menuContent");
}