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
  var horbtn1 =document.getElementById("horbtn1");
  var horbtn2 =document.getElementById("horbtn2");
  var horbtn3 =document.getElementById("horbtn3");
  var horbtn4 =document.getElementById("horbtn4");
  var horwrtie1 = document.getElementById("horwrite1");
  var horwrtie2 = document.getElementById("horwrite2");
  var horwrtie3 = document.getElementById("horwrite3");
  var horwrtie4 = document.getElementById("horwrite4");
  function btncolor(){
    horbtn1.style.background = "#CE291B";
    horbtn2.style.background= "none";
    horbtn3.style.background= "none";
    horbtn4.style.background= "none";
    horwrite1.style.display= "block";
    horwrite2.style.display= "none";
    horwrite3.style.display= "none";
    horwrite4.style.display= "none";
  }
   function btncolor2(){
    horbtn1.style.background= "none";
    horbtn2.style.background= "#CE291B";
    horbtn3.style.background= "none";
    horbtn4.style.background= "none";
    horwrite1.style.display= "none";
    horwrite2.style.display= "block";
    horwrite3.style.display= "none";
    horwrite4.style.display= "none";
  }
   function btncolor3(){
    horbtn1.style.background= "none";
    horbtn2.style.background= "none";
    horbtn3.style.background= "#CE291B";
    horbtn4.style.background= "none";
    horwrite1.style.display= "none";
    horwrite2.style.display= "none";
    horwrite3.style.display= "block";
    horwrite4.style.display= "none";
  }
   function btncolor4(){
    horbtn1.style.background= "none";
    horbtn2.style.background= "none";
    horbtn3.style.background= "none";
    horbtn4.style.background= "#CE291B";
    horwrite1.style.display= "none";
    horwrite2.style.display= "none";
    horwrite3.style.display= "none";
    horwrite4.style.display= "block";
  }
  var horbtn11 =document.getElementById("horbtn11");
  var horbtn22 =document.getElementById("horbtn22");
  var horbtn33 =document.getElementById("horbtn33");
  var horbtn44 =document.getElementById("horbtn44");
  var bttcolor1 = document.getElementById("verticwrite1");
  var bttcolor2 = document.getElementById("verticwrite2");
  var bttcolor3 = document.getElementById("verticwrite3");
  var bttcolor4 = document.getElementById("verticwrite4");
  function btnncolor(){
      horbtn11.style.background = "#CE291B";
      horbtn22.style.background= "none";
      horbtn33.style.background= "none";
      horbtn44.style.background= "none";
      bttcolor1.style.display = "block";
      bttcolor2.style.display = "none";
      bttcolor3.style.display = "none";
      bttcolor4.style.display = "none";
  }
    function btnncolor2(){
      horbtn11.style.background = "none";
      horbtn22.style.background= "#CE291B";
      horbtn33.style.background= "none";
      horbtn44.style.background= "none";
      bttcolor1.style.display = "none";
      bttcolor2.style.display = "block";
      bttcolor3.style.display = "none";
      bttcolor4.style.display = "none";
  }
    function btnncolor3(){
      horbtn11.style.background = "none";
      horbtn22.style.background= "none";
      horbtn33.style.background= "#CE291B";
      horbtn44.style.background= "none";
      bttcolor1.style.display = "none";
      bttcolor2.style.display = "none";
      bttcolor3.style.display = "block";
      bttcolor4.style.display = "none";
  }
    function btnncolor4(){
      horbtn11.style.background = "none";
      horbtn22.style.background= "none";
      horbtn33.style.background= "none";
      horbtn44.style.background= "#CE291B";
      bttcolor1.style.display ="none";
      bttcolor2.style.display = "none";
      bttcolor3.style.display = "none";
      bttcolor4.style.display = "block";
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
  function acor1(){
    acorspan1.style.display = "none";
    acorspan2.style.display = "block";
    acorspan3.style.display = "block";
    acorspan4.style.display = "none";
    acorspan5.style.display = "block";
    acorspan6.style.display = "none";
    acorspan7.style.display = "block";
    acorspan8.style.display = "none";

    acord1.style.height = "215px";
    acord2.style.height = "40px";
    acord3.style.height = "40px";
    acord4.style.height = "40px";
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
  }
  function acor8(){
    acorspan8.style.display = "none";
    acorspan7.style.display = "block";
    acord4.style.height = "40px";
  }