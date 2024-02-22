const canvas = document.querySelector("canvas");  
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 200;

ctx.globalCompositeOperation = "destination-out";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function drawInitial() {
    ctx.beginPath();
    ctx.moveTo(620, 290); // Start point of the initial line
    ctx.lineTo(canvas.width - 490, canvas.height - 564);
    ctx.moveTo(490, 360); // End point of the initial line
    ctx.lineTo(canvas.width - 850, canvas.height - 527);
    ctx.moveTo(980, 340); // Start point of the initial line
    ctx.lineTo(canvas.width - 785, canvas.height - 452);
    ctx.stroke();
}

// Call drawInitial to remove part of the background on page load
drawInitial();

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));