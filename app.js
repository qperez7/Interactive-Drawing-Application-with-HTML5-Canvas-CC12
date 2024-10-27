// Task 1: Set Up the HTML Structure (Refer to html file)

// Task 2: Configure the JavaScript for Drawing Context
let Drawing = false;
let x = 0;
let y = 0;
// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Get the 2D drawing context
const ctx = canvas.getContext('2d');

// Add Mouse Movement Events

canvas.addEventListener("mousedown", (event) => {
    drawShape(ctx, x, y, event.clientX, event.clientY)
    x = event.clientX;
    y = event.clientY;
    Drawing = true;
});
canvas.addEventListener("mouseup", (event) => {
    drawShape(ctx, x, y, event.clientX, event.clientY)
    x = event.clientX;
    y = event.clientY;
    Drawing = true;
});
canvas.addEventListener("mousemove", (event) => {
    drawShape(ctx, x, y, event.clientX, event.clientY)
    x = event.clientX;
    y = event.clientY;
    Drawing = true;
});
function drawShape(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    //ctx.colorSelector();
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}