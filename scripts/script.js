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

// Filter


var btnVideo = document.querySelector('.btn-video');
var btnBts = document.querySelector('.btn-bts');
var btnNews = document.querySelector('.btn-news');
var btnCp = document.querySelector('.btn-cp');
var btnArt = document.querySelector('.btn-art');
var btnInt = document.querySelector('.btn-int');
var btnHowto = document.querySelector('.btn-howto');
var btnAll = document.querySelector('.btn-all');

var allItems = document.querySelectorAll('.items');


//

function showAll() {

    for (var q = 0; q < allItems.length; q++) {
        allItems[q].classList.remove('js-hide');
    }
}

btnAll.addEventListener('click', showAll);


// Video
function showVideoMarketing() {

    for (var q = 0; q < allItems.length; q++) {
        allItems[q].classList.remove('js-hide');
        //     If the list of items does contain class 'cat-video'...
        if (!allItems[q].classList.contains('video')) {
            //       ... Do NOT hide it, but do hide everything else.
            allItems[q].classList.add('js-hide');
        }
    }
}

btnVideo.addEventListener('click', showVideoMarketing);

//

// Video
function showBehindTheScenes() {

    for (var q = 0; q < allItems.length; q++) {
        allItems[q].classList.remove('js-hide');
        //     If the list of items does contain class 'cat-video'...
        if (!allItems[q].classList.contains('bts')) {
            //       ... Do NOT hide it, but do hide everything else.
            allItems[q].classList.add('js-hide');
        }
    }
}

btnBts.addEventListener('click', showBehindTheScenes);

// News
function showNews() {

    for (var q = 0; q < allItems.length; q++) {
        allItems[q].classList.remove('js-hide');
        //     If the list of items does contain class 'cat-video'...
        if (!allItems[q].classList.contains('news')) {
            //       ... Do NOT hide it, but do hide everything else.
            allItems[q].classList.add('js-hide');
        }
    }
}

btnNews.addEventListener('click', showNews);


// CP
function showCreativeProcess() {

    for (var q = 0; q < allItems.length; q++) {
        allItems[q].classList.remove('js-hide');
        //     If the list of items does contain class 'cat-video'...
        if (!allItems[q].classList.contains('cp')) {
            //       ... Do NOT hide it, but do hide everything else.
            allItems[q].classList.add('js-hide');
        }
    }
}

btnCp.addEventListener('click', showCreativeProcess);

// Art
function showInpiredByArt() {

    for (var q = 0; q < allItems.length; q++) {
        allItems[q].classList.remove('js-hide');
        //     If the list of items does contain class 'cat-video'...
        if (!allItems[q].classList.contains('art')) {
            //       ... Do NOT hide it, but do hide everything else.
            allItems[q].classList.add('js-hide');
        }
    }
}

btnArt.addEventListener('click', showInpiredByArt);

// Int
function showInterview() {

    for (var q = 0; q < allItems.length; q++) {
        allItems[q].classList.remove('js-hide');
        //     If the list of items does contain class 'cat-video'...
        if (!allItems[q].classList.contains('inter')) {
            //       ... Do NOT hide it, but do hide everything else.
            allItems[q].classList.add('js-hide');
        }
    }
}

btnInt.addEventListener('click', showInterview);

// Int
function showHowto() {

    for (var q = 0; q < allItems.length; q++) {
        allItems[q].classList.remove('js-hide');
        //     If the list of items does contain class 'cat-video'...
        if (!allItems[q].classList.contains('howto')) {
            //       ... Do NOT hide it, but do hide everything else.
            allItems[q].classList.add('js-hide');
        }
    }
}

btnHowto.addEventListener('click', showHowto);