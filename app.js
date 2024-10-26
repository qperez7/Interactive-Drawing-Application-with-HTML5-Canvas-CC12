// Task 1: Set Up the HTML Structure (Refer to html file)

// Task 2: Configure the JavaScript for Drawing Context
// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Get the 2D drawing context
const ctx = canvas.getContext('2d');

// Add Mouse Movement Events
document.querySelector("html").addEventListener("mousemove", event => {
    console.log(`X: ${event.clientX} Y: ${event.clientY}`);
})
