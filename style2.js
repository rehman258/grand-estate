 var mainsp = document.getElementById("magicspan1");
 var mainsp2 = document.getElementById("magicspan2");
 var mainworking = document.getElementById("slideundersec");
function shw(){
     mainsp.style.display ="none";
     mainsp2.style.display ="block";
     mainworking.style.height = "690px";
}
function hddn(){
     mainsp.style.display ="block";
     mainsp2.style.display ="none";
     mainworking.style.height = "570px"
}
var slidelent = document.getElementById("slidelent");
var slidelft = slidelent.style.left
var start = 0;
var mine = 7;
    var btn1 = document.getElementById("twslidebtn");
    var btn2 = document.getElementById("twslidebtn3");
    var numb = "-25vw";
    
function scndslidebtn2(){

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
var nxt1 = document.getElementById("choos1");
var nxt2 = document.getElementById("choos2");
var nxt3 = document.getElementById("choos3");
var mainslide = document.getElementById("firstslent");
function skip1(){
    mainslide.style.left = "0vw";
    nxt1.style.height = "20px";
    nxt1.style.width = "20px";
    nxt2.style.height = "15px";
    nxt2.style.width = "15px";
    nxt3.style.height = "15px";
    nxt3.style.width = "15px";
    nxt1.style.background = "white";
    nxt2.style.background = "lightgrey";
    nxt3.style.background = "lightgrey";
}
function skip2(){
    mainslide.style.left = "-100vw";
    nxt1.style.height = "15px";
    nxt1.style.width = "15px";
    nxt2.style.height = "20px";
    nxt2.style.width = "20px";
    nxt3.style.height = "15px";
    nxt3.style.width = "15px";
    nxt1.style.background = "lightgrey";
    nxt2.style.background = "white";
    nxt3.style.background = "lightgrey";
}
function skip3(){
	mainslide.style.left = "-200vw";
    nxt1.style.height = "15px";
    nxt1.style.width = "15px";
    nxt2.style.height = "15px";
    nxt2.style.width = "15px";
    nxt3.style.height = "20px";
    nxt3.style.width = "20px";
    nxt1.style.background = "lightgrey";
    nxt2.style.background = "lightgrey";
    nxt3.style.background = "white";
}
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
//  fix btn ucun display
//   var btnclear = document.getElementById("allup");
//   var bod = document.getElementsByTagName("body");
//   var bdof = bod.scroolTop;

// function clearbody(a){
//     window.scrollTo(0,0);
// }

// // function hidshow(){
// //          bod.offsetTop = "0px";  
// // }
// // hidshow();