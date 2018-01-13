window.onscroll = function() {myFunction()};
var navbar = document.getElementById("toolul");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.style.position = "fixed"
    navbar.style.left = "10%"
    navbar.style.background = "white"
  } else {
    navbar.classList.remove("sticky");
    navbar.style.position = "relative"
    navbar.style.left = "0%"
    navbar.style.background = "none"
  }
}