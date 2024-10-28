// Task 1: Set Up the HTML Structure (Refer to html file)

// Task 2: Configure the JavaScript for Drawing Context
let Drawing = false;

// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Get the 2D drawing context
const ctx = canvas.getContext('2d');

// Add Mouse Movement Events

canvas.addEventListener("mousedown", (e) => {
    x = e.offsetX
    y = e.offsetY
    console.log('Mouse down at:', x, y);
    Drawing = true;
});
canvas.addEventListener("mouseup", () => {
    Drawing = false;
console.log('Mouse released');
});
canvas.addEventListener("mousemove", (e) => {
if (!Drawing) return; 
// Stop if the mouse is not pressed
console.log('Mouse moving at:', e.offsetX, e.offsetY);
drawShape(e.offsetX, e.offsetY)
});
// Task 3: Implement Shape Drawing Logic
const rectangle = document.getElementById('rectangle');
const circles = document.getElementById('circles');
const lines = document.getElementById('lines');

rectangle.addEventListener("click", () => {
    drawingTool = 'rectangle';
    Drawing = true;
});
circles.addEventListener("click", () => {
    drawingTool = 'circles';
    Drawing = true;
});
lines.addEventListener("click", () => {
    drawingTool = 'lines';
    Drawing = true;
});
function drawShape(x1,y1) {
    const width = x1-x;
    const height = y1-y;
        if(drawingTool === 'rectangle') {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.strokeRect (x,y,width,height);
        
}

   if(drawingTool === 'circles') {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);  // Draw a full circle
    ctx.fill(color);  // Fill the circle
}
   if(drawingTool ==='lines') {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(x,y)
    ctx.lineTo(x1,y1)
    ctx.stroke();
    ctx.closePath();
}}
//Task 4: Add Color Selection and Canvas Clearing
const clearButton = document.getElementById('clear')
const colorSelector = document.getElementById("colorSelector");
clearButton.addEventListener('click',() => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
const color = colorSelector.addEventListener("click", () => {
    colorSelector.value
});