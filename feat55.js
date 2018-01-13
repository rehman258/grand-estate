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