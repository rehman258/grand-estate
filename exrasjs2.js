window.onscroll = function() {myFunction()};
var navbar = document.getElementById("toolul");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.position = "fixed";
    navbar.style.background = "white";
    navbar.style.left = "10%";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.position = "relative";
    navbar.style.left = "0%";
    navbar.style.background = "none";
  }
}


var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();


var countdownfunction = setInterval(function() {


    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("comnumbs1").innerHTML = days ;
    document.getElementById("comnumbs2").innerHTML = hours; 
    document.getElementById("comnumbs3").innerHTML = minutes;
    document.getElementById("comnumbs4").innerHTML = seconds;
    if (distance < 0) {
        clearInterval(countdownfunction);
    }
}, 1000);