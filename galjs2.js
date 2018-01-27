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


var grdbtn1 = document.getElementById("grdbtn1");
var grdbtn2 = document.getElementById("grdbtn2");
var grdbtn3 = document.getElementById("grdbtn3");
var grdbtn4 = document.getElementById("grdbtn4");

var grdphoto1 = document.getElementById("grdidpht1");
var grdphoto2 = document.getElementById("grdidpht2");
var grdphoto3 = document.getElementById("grdidpht3");
var grdphoto4 = document.getElementById("grdidpht4");
var grdphoto5 = document.getElementById("grdidpht5");
var grdphoto6 = document.getElementById("grdidpht6");
var grdphoto7 = document.getElementById("grdidpht7");
var grdphoto8 = document.getElementById("grdidpht8");
var grdphoto9 = document.getElementById("grdidpht9");


var allgrid = document.getElementById("allgrid");
var forgrid = document.getElementById("forgrid");

function gridall(){
    grdphoto1.style.display = "block";
    grdphoto2.style.display = "block";
    grdphoto3.style.display = "block";
    grdphoto4.style.display = "block";
    grdphoto5.style.display = "block";
    grdphoto6.style.display = "block";
    grdphoto7.style.display = "block";
    grdphoto8.style.display = "block";
    grdphoto9.style.display = "block";
    allgrid.style.height = "910px";
    forgrid.style.height = "1150px";
}
function gridtwo(){
    grdphoto1.style.display = "block";
    grdphoto2.style.display = "block";
    grdphoto3.style.display = "block";
    grdphoto4.style.display = "none";
    grdphoto5.style.display = "none";
    grdphoto6.style.display = "none";
    grdphoto7.style.display = "none";
    grdphoto8.style.display = "none";
    grdphoto9.style.display = "none";
    allgrid.style.height = "350px";
    forgrid.style.height = "650px";
}
function gridthree(){
    grdphoto1.style.display = "none";
    grdphoto2.style.display = "none";
    grdphoto3.style.display = "none";
    grdphoto4.style.display = "block";
    grdphoto5.style.display = "block";
    grdphoto6.style.display = "block";
    grdphoto7.style.display = "block";
    grdphoto8.style.display = "none";
    grdphoto9.style.display = "none";
    allgrid.style.height = "500px";
    forgrid.style.height = "950px";
}
function gridfour(){
    grdphoto1.style.display = "none";
    grdphoto2.style.display = "none";
    grdphoto3.style.display = "none";
    grdphoto4.style.display = "none";
    grdphoto5.style.display = "none";
    grdphoto6.style.display = "none";
    grdphoto7.style.display = "none";
    grdphoto8.style.display = "block";
    grdphoto9.style.display = "block";
    allgrid.style.height = "350px";
    forgrid.style.height = "650px";
}