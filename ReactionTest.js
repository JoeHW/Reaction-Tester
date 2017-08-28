
let shapeAfterDelay = () => setTimeout(shapeGenerator, Math.random() * 2000);

let randomSize = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return  Math.floor(Math.random() * (max - min + 1)) + min;
};

let colorArray = ['red', 'blue', 'green', 'yellow', 'orange'];
let shapePicker = ["0", "50%"];

let shapeGenerator = () => {
let newShape = document.getElementById('pixelborder');
newShape.style.display = "block";
newShape.style.width = "" + randomSize(50,350) + "px";
newShape.style.height = newShape.style.width;
newShape.style.backgroundColor = colorArray[randomSize(0,4)];
newShape.style.borderRadius = shapePicker[randomSize(0,4)];
newShape.style.marginTop = "" + randomSize(50,300) + "px";
newShape.style.marginBottom = "" + randomSize(50,300) + "px";
newShape.style.marginRight = "" + randomSize(50,300) + "px";
newShape.style.marginLeft = "" + randomSize(50,300) + "px";
let start = new Date().getTime();

let clickedShape = document.getElementById("pixelborder");
clickedShape.onclick = () => {
clickedShape.style.display = "none";
let end = new Date().getTime();
let timeTaken =  (end - start)/1000;
document.getElementById("timer").innerHTML = timeTaken;
shapeAfterDelay();
 };
};

document.body.onload = shapeGenerator();
