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
var minegrid1 = document.getElementById("masgrid1");
var minegrid2 = document.getElementById("masgrid2");
var minegrid3 = document.getElementById("masgrid3");
var minegrid4 = document.getElementById("masgrid4");
var minegrid5 = document.getElementById("masgrid5");
var minegrid6 = document.getElementById("masgrid6");
var minegrid7 = document.getElementById("masgrid7");
var minegrid8 = document.getElementById("masgrid8");
var minegrid9 = document.getElementById("masgrid9");
var minegrid10 = document.getElementById("masgrid10");
var minegrid11 = document.getElementById("masgrid11");
var minegrid12 = document.getElementById("masgrid12");

var mybt1 = document.getElementById("btnn1");
var mybt2 = document.getElementById("btnn2");
var mybt3 = document.getElementById("btnn3");
var mybt4 = document.getElementById("btnn4");

function btn1(){
   mybt1.addEventListener("click",function(){
     minegrid1.style.display = "inline-block";
     minegrid2.style.display = "inline-block";
     minegrid3.style.display = "inline-block";
     minegrid4.style.display = "inline-block";
     minegrid5.style.display = "inline-block";
     minegrid6.style.display = "inline-block";
     minegrid7.style.display = "inline-block";
     minegrid8.style.display = "inline-block";
     minegrid9.style.display = "inline-block";
     minegrid10.style.display = "inline-block";
     minegrid11.style.display = "inline-block";
     minegrid12.style.display = "inline-block";


     minegrid4.style.top = "-14%";
     minegrid6.style.top = "-14%";
     minegrid6.style.left = "0%";
     minegrid5.style.left = "0%";
     minegrid7.style.left = "0%";
     minegrid12.style.left = "0%";
     minegrid12.style.top  = "-28%";



     minegrid11.style.top = "-28%";
     minegrid11.style.left = "0%";
     minegrid8.style.top = "-28%";
     minegrid9.style.top = "-14%";
     minegrid10.style.top = "-28%";
     minegrid10.style.right = "0%";
   });
}
btn1();


function btn2(){
     mybt2.addEventListener("click",function(){
     minegrid1.style.display = "inline-block";
     minegrid2.style.display = "inline-block";
     minegrid3.style.display = "inline-block";
     minegrid4.style.display = "none";
     minegrid5.style.display = "none";
     minegrid6.style.display = "none";
     minegrid7.style.display = "none";
     minegrid8.style.display = "none";
     minegrid9.style.display = "none";
     minegrid10.style.display = "none";
     minegrid11.style.display = "none";
     minegrid12.style.display = "none";
   });

}
btn2();


function btn3(){
     mybt3.addEventListener("click",function(){
     minegrid1.style.display = "none";
     minegrid2.style.display = "none";
     minegrid3.style.display = "none";
     minegrid4.style.display = "inline-block";
     minegrid5.style.display = "inline-block";
     minegrid6.style.display = "inline-block";
     minegrid7.style.display = "inline-block";
     minegrid8.style.display = "none";
     minegrid9.style.display = "none";
     minegrid10.style.display = "none";
     minegrid11.style.display = "none";
     minegrid12.style.display = "inline-block";


     minegrid4.style.top = "0%";
     minegrid6.style.top = "-0%";
     minegrid6.style.left = "-33%";
     minegrid7.style.left = "66%";
     minegrid5.style.left = "33%";
     minegrid12.style.left = "-33%";
     minegrid12.style.top  = "-14%";

   });

}
btn3();


function btn4(){
     
     mybt4.addEventListener("click",function(){
     minegrid1.style.display = "none";
     minegrid2.style.display = "none";
     minegrid3.style.display = "none";
     minegrid4.style.display = "none";
     minegrid5.style.display = "none";
     minegrid6.style.display = "none";
     minegrid7.style.display = "none";
     minegrid8.style.display = "inline-block";
     minegrid9.style.display = "inline-block";
     minegrid10.style.display = "inline-block";
     minegrid11.style.display = "inline-block";
     minegrid12.style.display = "none";


     minegrid11.style.top = "-30%";
     minegrid11.style.left = "66%";
     minegrid8.style.top = "-14%";
     minegrid9.style.top = "0%";
     minegrid10.style.top = "2%";
     minegrid10.style.right = "66%";
   });
}
btn4();