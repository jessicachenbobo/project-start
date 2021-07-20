$(function() {
  setInterval(function() {
    $("#limited_release").toggleClass("flash");
  }, 900);
  setInterval(changeImg, 2000);
  setInterval(changeImg2, 2200);
});

let physicalImages = document.querySelectorAll('.physical_img');  // this is an array
let boo = false;  // just to control the opacity of images

function changeImg(){
  switch(boo){
    case true:
      for(img of physicalImages){
        img.style.opacity = '0';
      }
      boo = false;
      break;
    case false:
      for(img of physicalImages){
        img.style.opacity = '1';
      }
      boo = true;
      break;
  }
}


var slideIndex = 0;
var slideIndex2 = 0;

function showslides() {
  var square1 = document.getElementsByClassName("square1");
  for (var i = 0; i < square1.length; i++) {
    square1[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > square1.length) {
    slideIndex = 1
  }
  square1[slideIndex - 1].style.opacity = "1";
}

function showslides2() {
  var square3 = document.getElementsByClassName("square3");
  for (var i = 0; i < square3.length; i++) {
    square3[i].style.opacity = "0";
  }
  slideIndex2++;
  if (slideIndex2 > square3.length) {
    slideIndex2 = 1
  }
  square3[slideIndex2 - 1].style.opacity = "1";
}

// var slideIndex = 0;
// var i = 0;
// function showslides(){
//   var square1 = document.getElementsByClassName("square1");
//   $("square1[i]").toggleClass("active");
// }
//
// function showslides2(){
//   var square3 = document.getElementsByClassName("square3");
//   for (var i=0 ; i<square3.length ; i++ ){
//     $(square3[i]).addClass("active");
//   }
// }
// slideIndex++;
// if(slideIndex>square1.length){slideIndex = 1}
// square1[slideIndex-1].style.display = "flex";
// square3[slideIndex-1].style.display = "block";
// setTimeout(showslides,2000);
