let imgIndex = 1;
let imgArray = [
  'images/header.png',
  'images/one.png',
  'images/two.jpg'
]

let left = document.getElementById('left');
let next = document.getElementById('right');
let myImage = document.getElementById('mainImg');


left.addEventListener('click', function(event) {
  console.log("working");
  myImage.setAttribute("src", imgArray[imgIndex]);
  imgArray++
  if(img src = undefined){
    imgArray[i] = [0]
  }
})
right.addEventListener('click', function(event) {
  console.log("working");
})







// let answer2 = document.getElementById('two');

//
// two.addEventListener('click', function(event) {
//   console.log('working, answer2');
//   myImage.setAttribute("src", imgArray[imgIndex]);
//   imgArray++
//   nextQuestion();
// })
