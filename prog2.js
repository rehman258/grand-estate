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

function move() {
  var elem = document.getElementById("progincolor1");   
  var width = 0;
  var id = setInterval(frame, 10);
  var elem2 = document.getElementById("mypurcent1")
  
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem2.innerHTML = width  + '%';
    }
  }
}
move();

function move2() {
  var elem2 = document.getElementById("progincolor2");   
  var width = 0;
  var id = setInterval(frame, 10);
  var elem3 = document.getElementById("mypurcent2")
  
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++; 
      elem2.style.width = width + '%'; 
      elem3.innerHTML = width  + '%';
    }
  }
}
move2();

function move3() {
  var elem3 = document.getElementById("progincolor3");   
  var width = 0;
  var id = setInterval(frame, 10);
  var elem4 = document.getElementById("mypurcent3")
  
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem3.style.width = width + '%'; 
      elem4.innerHTML = width  + '%';
    }
  }
}
move3();

function move4() {
  var elem4 = document.getElementById("progincolor4");   
  var width = 0;
  var id = setInterval(frame, 10);
  var elem5 = document.getElementById("mypurcent4")
  
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++; 
      elem4.style.width = width + '%'; 
      elem5.innerHTML = width  + '%';
    }
  }
}
move4();

function prog1() {  
  var width = 0;
  var id1 = setInterval(frame, 6.5);
  var elemm1 = document.getElementById("number1")
  
  function frame() {
    if (width >= 359) {
      clearInterval(id1);
    } else {
      width++; 
      elemm1.innerHTML = width;
    }
  }
}
prog1();

function prog2() {  
  var width = 173600;
  var id2 = setInterval(frame, 15);
  var elemm2 = document.getElementById("number2")
  
  function frame() {
    if (width >= 173759) {
      clearInterval(id2);
    } else {
      width++; 
      elemm2.innerHTML = width;
    }
  }
}
prog2();

function prog3() {  
  var width = 0;
  var id3 = setInterval(frame, 100);
  var elemm3 = document.getElementById("number3")
  
  function frame() {
    if (width >= 21) {
      clearInterval(id3);
    } else {
      width++; 
      elemm3.innerHTML = width;
    }
  }
}
prog3();

function prog4() {  
  var width = 0;
  var id4 = setInterval(frame, 1);
  var elemm4 = document.getElementById("number4")
  
  function frame() {
    if (width >= 543) {
      clearInterval(id4);
    } else {
      width++; 
      elemm4.innerHTML = width;
    }
  }
}
prog4();


function goupprog() {  
  var width = 0;
  var id2 = setInterval(frame, 15);
  var elemm2 = document.getElementById("lastpurcent1")
  
  function frame() {
    if (width >= 40) {
      clearInterval(id2);
    } else {
      width++; 
      elemm2.innerHTML = width + " % ";
    }
  }
}
goupprog();


function goupprog1() {  
  var width = 0;
  var id2 = setInterval(frame, 15);
  var elemm3 = document.getElementById("lastpurcent2")
  
  function frame() {
    if (width >= 50) {
      clearInterval(id2);
    } else {
      width++; 
      elemm3.innerHTML = width + " % ";
    }
  }
}
goupprog1();

function goupprog2() {  
  var width = 0;
  var id2 = setInterval(frame, 15);
  var elemm4 = document.getElementById("lastpurcent3")
  
  function frame() {
    if (width >= 60) {
      clearInterval(id2);
    } else {
      width++; 
      elemm4.innerHTML = width + " % ";
    }
  }
}
goupprog2();

function goupprog4() {  
  var width = 0;
  var id2 = setInterval(frame, 15);
  var elemm2 = document.getElementById("lastpurcent4")
  
  function frame() {
    if (width >= 70) {
      clearInterval(id2);
    } else {
      width++; 
      elemm2.innerHTML = width + " % ";
    }
  }
}
goupprog4();