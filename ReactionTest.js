//access the pixel border and put a class of shape inside of it
//random calcs depend on preset shape sizex
//determine max and minimum shape sizes
//onclick function sets off random style setter

//padding and exr div not neccessary



//onclick = () => function reset:
// clear html
// let newshape = document.createElement('A'):
// newshape.style.margin = func;
// newshape.style.size = func;
// newshape.style.borderRadius = func;
// append to correct div etc
//
// timer toggle Flip boolena?

//if timer is off, random setinterval to make shape appear
//timer on when shape appears, stop when shape is clicked
//repeat



//var element = document.createElement('select');
//element.style.width = "100px";

// function makeshape() => {
//   if(timerRunning === false){
//     //make new shape
//     timerRunning = true;


// <div id="timer"></div>
// <div id ="stop_timer" onclick="clearInterval(timerVar)">Stop time</div>

let timerVar;
const time = () => {
  if(timerToggle){
  timerVar = setInterval(countTimer, 1000);
} else {
  clearInterval(timerVar);
  totalSeconds = 0
  document.getElementById("timer").innerHTML = totalSeconds;
}
}

let totalSeconds = 0;

let countTimer = () => {
   ++totalSeconds;
document.getElementById("timer").innerHTML = totalSeconds
}



let timerToggle = false;
let needShape = true

let randomSize = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return  Math.floor(Math.random() * (max - min + 1)) + min;
}

let colorArray = ['red', 'blue', 'green', 'yellow', 'orange'];
let shapePicker = ["50%", "null"];

let shapeGenerator = () => {
let shapeBox = document.getElementById('pixelborder');
let newShape = document.createElement("div");
newShape.id = "shape";
newShape.style.width = "" + randomSize(50,350) + "px";
newShape.style.height = newShape.style.width;
newShape.style.backgroundColor = colorArray[randomSize(0,4)];
newShape.style.borderRadius = shapePicker[randomSize(0,1)];
document.body.insertBefore(newShape, shapeBox);
timerToggle = true;
time();

let clickedShape = document.getElementById("shape");
clickedShape.addEventListener('click', () => {
clickedShape.parentNode.removeChild(clickedShape);
timerToggle = false;
time();
needShape = true;
});

};

// var element = document.getElementById("element-id");
// element.parentNode.removeChild(element);

// clickedShape[0].addEventListener('click', (event) => {
// event.target.style.display = "none"
// timerToggle = false;
// time();
// });

//})

//document.body.onload = shapeGenerator();

const newGenerator = () => {
  let start;
  if(needShape){
  start = setInterval(shapeGenerator, randomSize(2000, 5000));
  needShape = false;
}}

// let rolling = () =>{
// if(!timerToggle){newGenerator();}
// }

document.body.onload = newGenerator();

//rolling();
