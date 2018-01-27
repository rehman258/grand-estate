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
var mmbtn1 = document.getElementById("mybtn1");
var mmbtn2 = document.getElementById("mybtn2");
var mmbtn3 = document.getElementById("mybtn3");
var mmbtn4 = document.getElementById("mybtn4");


var minecobe1 = document.getElementById("cobegrid1");
var minecobe2 = document.getElementById("cobegrid2");
var minecobe3 = document.getElementById("cobegrid3");
var minecobe4 = document.getElementById("cobegrid4");
var minecobe5 = document.getElementById("cobegrid5");
var minecobe6 = document.getElementById("cobegrid6");
var minecobe7 = document.getElementById("cobegrid7");
var minecobe8 = document.getElementById("cobegrid8");
var minecobe9 = document.getElementById("cobegrid9");
var minecobe10 = document.getElementById("cobegrid10");
function all(){
  mmbtn1.addEventListener("click",function(){
    
    minecobe1.style.display = "block"
    minecobe2.style.display = "block"
    minecobe3.style.display = "block"
    minecobe4.style.display = "block"
    minecobe5.style.display = "block"
    minecobe6.style.display = "block"
    minecobe7.style.display = "block"
    minecobe8.style.display = "block"
    minecobe9.style.display = "block"
    minecobe10.style.display = "block"

  });
}
all();

function type1(){
  mmbtn2.addEventListener("click",function(){
    
    minecobe1.style.display = "block"
    minecobe2.style.display = "block"
    minecobe3.style.display = "block"
    minecobe4.style.display = "none"
    minecobe5.style.display = "none"
    minecobe6.style.display = "none"
    minecobe7.style.display = "none"
    minecobe8.style.display = "none"
    minecobe9.style.display = "none"
    minecobe10.style.display = "none"

  });
}
type1();


function type2(){
  mmbtn3.addEventListener("click",function(){
    
    minecobe1.style.display = "none"
    minecobe2.style.display = "none"
    minecobe3.style.display = "none"
    minecobe4.style.display = "block"
    minecobe5.style.display = "block"
    minecobe6.style.display = "block"
    minecobe7.style.display = "none"
    minecobe8.style.display = "none"
    minecobe9.style.display = "block"
    minecobe10.style.display = "none"

  });
}
type2();

function type3(){
  mmbtn4.addEventListener("click",function(){
    
    minecobe1.style.display = "none"
    minecobe2.style.display = "none"
    minecobe3.style.display = "none"
    minecobe4.style.display = "none"
    minecobe5.style.display = "none"
    minecobe6.style.display = "none"
    minecobe7.style.display = "block"
    minecobe8.style.display = "block"
    minecobe9.style.display = "none"
    minecobe10.style.display = "block"

  });
}
type3();