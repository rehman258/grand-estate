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
var acorspan1 =document.getElementById("acorspan1");
  var acorspan2 =document.getElementById("acorspan2");
  var acorspan3 =document.getElementById("acorspan3");
  var acorspan4 =document.getElementById("acorspan4");
  var acorspan5 =document.getElementById("acorspan5");
  var acorspan6 =document.getElementById("acorspan6");
  var acorspan7 =document.getElementById("acorspan7");
  var acorspan8 =document.getElementById("acorspan8");

  var acord1 =document.getElementById("accord1");
  var acord2 =document.getElementById("accord2");
  var acord3 =document.getElementById("accord3");
  var acord4 =document.getElementById("accord4");


  var specik = document.getElementById("myspecp");
  function acor1(){
    acorspan1.style.display = "none";
    acorspan2.style.display = "block";
    acorspan3.style.display = "block";
    acorspan4.style.display = "none";
    acorspan5.style.display = "block";
    acorspan6.style.display = "none";
    acorspan7.style.display = "block";
    acorspan8.style.display = "none";

    acord1.style.height = "285px";
    acord2.style.height = "40px";
    acord3.style.height = "40px";
    acord4.style.height = "40px";
    specik.style.top = "20%";
  }
  function acor2(){
    acorspan2.style.display = "none";
    acorspan1.style.display = "block";
    acord1.style.height = "40px";
  }
    function acor3(){
    acorspan1.style.display = "block";
    acorspan2.style.display = "none";
    acorspan3.style.display = "none";
    acorspan4.style.display = "block";
    acorspan5.style.display = "block";
    acorspan6.style.display = "none";
    acorspan7.style.display = "block";
    acorspan8.style.display = "none";

    acord1.style.height = "40px";
    acord2.style.height = "215px";
    acord3.style.height = "40px";
    acord4.style.height = "40px";

    specik.style.top = "50%";
  }
  function acor4(){
    acorspan4.style.display = "none";
    acorspan3.style.display = "block";
    acord2.style.height = "40px";
  }
    function acor5(){
    acorspan1.style.display = "block";
    acorspan2.style.display = "none";
    acorspan3.style.display = "block";
    acorspan4.style.display = "none";
    acorspan5.style.display = "none";
    acorspan6.style.display = "block";
    acorspan7.style.display = "block";
    acorspan8.style.display = "none";

    acord1.style.height = "40px";
    acord2.style.height = "40px";
    acord3.style.height = "215px";
    acord4.style.height = "40px";


    specik.style.top = "50%";
  }
  function acor6(){
    acorspan6.style.display = "none";
    acorspan5.style.display = "block";
    acord3.style.height = "40px";
  }
    function acor7(){
    acorspan1.style.display = "block";
    acorspan2.style.display = "none";
    acorspan3.style.display = "block";
    acorspan4.style.display = "none";
    acorspan5.style.display = "block";
    acorspan6.style.display = "none";
    acorspan7.style.display = "none";
    acorspan8.style.display = "block";

    acord1.style.height = "40px";
    acord2.style.height = "40px";
    acord3.style.height = "40px";
    acord4.style.height = "215px";

    specik.style.top = "50%";

    
  }
  function acor8(){
    acorspan8.style.display = "none";
    acorspan7.style.display = "block";
    acord4.style.height = "40px";
  }