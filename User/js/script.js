// Add a class to the second navbar when scrolling down past the first navbar
window.onscroll = function () {
    var navbarFirst = document.querySelector('.navbar-first');
    var navbarSecond = document.querySelector('.navbar-second');

    if (window.scrollY > navbarFirst.offsetHeight) {
        navbarSecond.classList.add('fixed-top');
    } else {
        navbarSecond.classList.remove('fixed-top');
    }
};