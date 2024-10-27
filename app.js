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
// Task 3: Implement Shape Drawing Logic
function drawShape(ctx, x1, y1, x2, y2) {
    let toolOption = toolOption.querySelector("radio") // Need to properly reference radio tool <---
    if(toolOption === Rectangle) {
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 5;
        ctx.strokeRect(250, 50, 150, 100);
}
else if (toolOption === Circles) {
    ctx.beginPath();
    ctx.arc(150, 300, 50, 0, 2 * Math.PI);  // Draw a full circle
    ctx.fillStyle = '#f1c40f';
    ctx.fill();  // Fill the circle
}
else {
    ctx.beginPath();
    //ctx.colorSelector(); // Need to properly reference color selector <---
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}}