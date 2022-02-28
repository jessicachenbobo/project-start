$(function() {
  setInterval(function() {
    $("#limited_release").toggleClass("flash");
  }, 900);
  setInterval(changeImg, 2000);
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

let shoppingBag = document.querySelectorAll(".fa-shopping-bag");
shoppingBag.forEach((item, i) => {
  item.addEventListener("click", showDiv);
});
// click "X" -> closeDiv
document.querySelector(".fa-times").addEventListener("click", closeDiv);

function showDiv(e) {
  console.log("target:", e.target.dataset.key);
  console.log("event position:(", e.pageX, ",",e.pageY, ")");
  // let x = e.target.clientX;
  // let y = e.target.clientY;
  // document.querySelector('#productName').innerHTML = productList[e.target.dataset.key].name;
  // document.querySelector('#price').innerHTML = productList[e.target.dataset.key].price;
  // document.querySelector('#description').innerHTML = productList[e.target.dataset.key].description;
  // document.querySelector('#productImgsrc').innerHTML
  document.querySelector('#productImgsrc').src = productList[e.target.dataset.key].imgsrc;
  document.querySelector('#productName').innerHTML = productList[e.target.dataset.key].name;
  document.querySelector("#price").innerHTML = productList[e.target.dataset.key].price;
  document.querySelector("#description").innerHTML = productList[e.target.dataset.key].description;
  // document.querySelector("#popUpDiv-black").style.bottom = e.clientY + "px";
  document.querySelector("#popUpDiv-black").style.display= "flex";
  document.querySelector(".popUpDiv-white").style.display= "flex";
}
function closeDiv() {
  document.querySelector("#popUpDiv-black").style.display= "none";
  document.querySelector(".popUpDiv-white").style.display= "none";
}


// const productList = {
//   productA: {
//     src: 'hello',
//     name: 'hello there1',
//     price: 0,
//     description: 'hellooooo'
//   },
//   productB: {
//     src: 'hello',
//     name: 'hello there2',
//     price: 0,
//     description: 'hellooooo'
//   },
//   productC: {
//     src: 'hello',
//     name: 'hello there3',
//     price: 0,
//     description: 'hellooooo'
//   }
// }
function Product(imgsrc, name, price, description) {
  this.imgsrc = imgsrc;
  this.name = name;
  this.price = price;
  this.description = description;
}
const productList = {
  productA: new Product("img/colorful-necklace-lookbook-2.png", "Childhood Memories", "$10,000", "Reminiscent of the childhood days when you explore this colorful world."),
  productB: new Product("img/bracelet-lookbook-2.png", "Signature Trouser", "$13,000", "Hey, darling, you definitely need to try our signature trouser."),
  productC: new Product("img/colorful-necklace-lookbook-3.png", "Childhood Memories Bracelet", "$8,000", "Your daily essentials. Pair it with our signature trouser to complete the look"),
  productD: new Product("img/bracelet-lookbook-3.png", "Chained Love 24K Gold", "$20,000", "Pair it with our signature trouser and become the STAR of the day."),
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
