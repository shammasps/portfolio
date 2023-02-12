var isAleadyLoaded = false;
// this function will fire on the time of scroll (every time)
function windowScroll(){ 

  var skillDiv = document.getElementById("allskills");
  var isvisible = isScrolledIntoView(skillDiv);

  if(isvisible== false){
    isAleadyLoaded = false;
  }

  if(isvisible){
    if(isAleadyLoaded == false){
      actanim();
      isAleadyLoaded = true;
    }
  }  else {
    $("#circle1").css("animation","");
    $("#circle2").css("animation","");
    $("#circle3").css("animation","");
    $("#circle4").css("animation","");
  }
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    if(elemTop <= docViewBottom && elemTop >= docViewTop ){
      return true;
    }
    if(elemBottom >= docViewTop && elemBottom <= docViewBottom ){
      return true;
    }
    if(elemTop < docViewTop && elemBottom > docViewBottom ){
      return true;
    }
    return false;
}
function actanim() {
  
  $("#circle1").css("animation","animCircle1 2s linear forwards");
  $("#circle2").css("animation","animCircle2 2s linear forwards");
  $("#circle3").css("animation","animCircle3 2s linear forwards");
  $("#circle4").css("animation","animCircle4 2s linear forwards");


  let number1 = document.getElementById('number1');
  let counter1 =0;
  setInterval(() => {
  if (counter1 == 80) {
    
  } else {
    counter1 += 1 ;
    number1.innerHTML = counter1 + "%";
  }
  }, 25);

  let number2 = document.getElementById('number2');
  let counter2 =0;
  setInterval(() => {
  if (counter2 == 70) {
    
    } else {
      counter2 += 1 ;
      number2.innerHTML = counter2 + "%";
    }
  }, 29);


  let number3 = document.getElementById('number3');
  let counter3 =0;
  setInterval(() => {
  if (counter3 == 75) {
    
  } else {
    counter3 += 1 ;
    number3.innerHTML = counter3 + "%";
  }
  }, 28);

  let number4 = document.getElementById('number4');
  let counter4 =0;
  setInterval(() => {
  if (counter4 == 65) {
    
  } else {
    counter4 += 1 ;
    number4.innerHTML = counter4 + "%";
  }
  }, 30);

}


window.onload = (event) => {  
   
  };    
  
 



