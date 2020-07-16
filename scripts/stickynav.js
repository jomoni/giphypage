// Rationality Engineering Design Website
// Morgan Nicholson, jmnichol3@gmail.com
// 6/11/2020
//taken from: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickynavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function stickynavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}