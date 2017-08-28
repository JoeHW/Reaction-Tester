
let timerToggle = false;
let needShape = true;

let randomSize = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return  Math.floor(Math.random() * (max - min + 1)) + min;
};

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
newShape.style.marginTop = "" + randomSize(50,300) + "px";
newShape.style.marginBottom = "" + randomSize(50,300) + "px";
newShape.style.marginRight = "" + randomSize(50,300) + "px";
newShape.style.marginLeft = "" + randomSize(50,300) + "px";
shapeBox.appendChild(newShape);
//document.body.insertBefore(newShape, shapeBox);
timerToggle = true;
let start = new Date().getTime();

let clickedShape = document.getElementById("shape");
clickedShape.addEventListener('click', () => {
clickedShape.parentNode.removeChild(clickedShape);
let end = new Date().getTime();
let timeTaken =  (end - start)/1000;
document.getElementById("timer").innerHTML = timeTaken;
timerToggle = false;
needShape = true;
 });
};

const newGenerator = () => {
  let begin = () => {setInterval(shapeGenerator, randomSize(2000, 5000))}
  if(!needShape){return;}
  else {
  needShape = false;
  begin();
}};


document.body.onload = newGenerator();
