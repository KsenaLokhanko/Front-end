function doChoice() {
  let text;
  if (confirm("Make a choice!") == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  document.getElementById("demo").innerHTML = text;
}

function clearText() {
  document.getElementById("demo").innerHTML = "";  
}
  
function changeCol() {
  document.getElementById("d1").className = "bgPink";
  var dd2 = document.getElementById("d2");
  dd2.className = "bgGrey";
} 

function changeText() {
  document.getElementById("d1").innerHTML= "Goodbye";
  document.getElementById("d2").innerHTML = "dream!";
} 

function changeCanvaColP() {  document.getElementById("canvas1").style.backgroundColor = "pink";
}

function changeCanvaColG() {
  const c2 = document.getElementById("canvas2");
  c2.style.backgroundColor = "grey";
  const ctx = c2.getContext("2d");

  ctx.fillStyle = "HotPink";
  ctx.fillRect(10, 10, 100, 100);
  ctx.fillRect(120, 10, 100, 100);
  
  ctx.fillStyle = "black";
  ctx.font="16px Arial";
  ctx.fillText("How are you?",10,35);
} 

//Canvas Color Changer
function changeBackgroundColor() {
  const canvas = document.getElementById("myCanvas");
  const colorInput = document.getElementById("colorInput");
  canvas.style.backgroundColor = colorInput.value;
}

function doSquare() {
    const canvas = document.getElementById("myCanvas");
    const colorInput = document.getElementById("colorInput");
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("slider");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const squareSize = parseInt(slider.value);
    ctx.fillStyle = colorInput.value;
    ctx.fillRect(10, 10, squareSize, squareSize);
    const secondSquareX = squareSize + 20; 
    const secondSquareY = 10; 
    ctx.fillStyle = "#FF0000"; 
    ctx.fillRect(secondSquareX, secondSquareY, squareSize, squareSize);
}

//Paint Your Own Picture
function setWidth(value) {
  var paintcanvas = document.getElementById("canvasPaint");
  if (isNumeric(value)) {
    paintcanvas.width = parseInt(value);
  }
}

function setHeight(value) {
  var paintcanvas = document.getElementById("canvasPaint");
  if (isNumeric(value)) {
    paintcanvas.height = parseInt(value);
  }
}

function clearCanvas() {
  var paintcanvas = document.getElementById("canvasPaint");
  var context = paintcanvas.getContext("2d");
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
  var context = paintcanvas.getContext("2d");
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
}

function isNumeric(value) {
  return !isNaN(value);
}
var isPainting = false;

function startPaint() {
  isPainting = true;
}

function endPaint() {
 isPainting = false;
}

function doPaint(x, y) {
  if (isPainting) {
    paintCircle(x, y);
  }
}

function changeColor(newColor) {
  var color = newColor;
}

function resizeBrush(newSize) {
  var radius = newSize;
  document.getElementById("sizeOutput").value = newSize;
}

//TODO list
function addTask() {
    var input = document.getElementById("input");
    var newTask = input.value;

    if (newTask != "") {
        var item = document.createElement("li");
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask; document.getElementById("tasks").appendChild(item);
        input.value = "";
        input.placeholder = "enter next task ...";
    }
}

function markDone(item) {
    item.className = 'finished';
}

function remove(item) {
    if (item.classList.contains('finished')) {
        item.remove();
    }
}

function doAbout() {
    var divAbout = document.getElementById("divabout");
    divAbout.textContent = "Author is Lokhanko Kseniia";
    divAbout.classList.add("aboutcolor");
}

function clearAbout() {
    var divAbout = document.getElementById("divabout");
    divAbout.textContent = "";
}
