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



let totalSeconds = 0;

let countTimer = () => {
   ++totalSeconds;
document.getElementById("timer").innerHTML = totalSeconds
}

let timerToggle = false;
let timerVar = setInterval(countTimer, 1000);


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
newShape.style.width = "" + randomSize(50,350) + "px";
newShape.style.height = newShape.style.width;
newShape.style.backgroundColor = colorArray[randomSize(0,4)];
newShape.style.borderRadius = shapePicker[randomSize(0,1)];
document.body.insertBefore(newShape, shapeBox);
};

document.body.onload = shapeGenerator();
