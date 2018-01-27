window.onscroll = function() {myFunction()};
var navbar = document.getElementById("toolul");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.position = "fixed";
    navbar.style.left = "10%";
    navbar.style.background = "white";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.position = "relative";
    navbar.style.left = "0%";
    navbar.style.background = "none";
  }
}



var down = document.getElementById("testdown1");
var inp = document.getElementById("loksinput");
var inpp = document.getElementById("loksinput1");
var inppp = document.getElementById("loksinput2");
function endlide1(){
    down.style.left ="0px";
    inp.style.width = "20px"
    inp.style.height = "20px"
    inpp.style.width = "15px"
    inpp.style.height = "15px"
    inppp.style.width = "15px"
    inppp.style.height = "15px"
    inp.style.background = "#CE291B";
    inpp.style.background = "lightgrey";
    inppp.style.background = "lightgrey";
}
function endlide2(){
    down.style.left ="-1110px";
    inpp.style.width = "20px"
    inpp.style.height = "20px"
    inp.style.width = "15px"
    inp.style.height = "15px"
    inppp.style.width = "15px"
    inppp.style.height = "15px"
    inp.style.background = "lightgrey";
    inpp.style.background = "#CE291B";
    inppp.style.background = "lightgrey";
}
function endlide3(){
    down.style.left ="-2220px";
    inppp.style.width = "20px";
    inppp.style.height = "20px";
    inp.style.width = "15px";
    inp.style.height = "15px";
    inpp.style.width = "15px";
    inpp.style.height = "15px";
    inp.style.background = "lightgrey";
    inpp.style.background = "lightgrey";
    inppp.style.background = "#CE291B";
} 