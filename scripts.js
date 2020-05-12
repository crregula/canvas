var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 100;
let y = 100;
let width = 100;
let height = 100;

var ctx = canvas.getContext("2d");

// Rectangle
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.fillRect(x, y, width, height);
ctx.fillStyle = "rgba(0,0,255,0.5)";
ctx.fillRect(300, 300, width, height);
ctx.fillStyle = "rgba(0,255,0,0.5)";
ctx.fillRect(200, 200, width + 100, height - 50);

// Line
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(200, 500);
ctx.strokeStyle = "pink";
ctx.stroke();

// Arc
ctx.beginPath();
ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
ctx.stroke();

// Draw Multiple Circles
for (let i = 0; i < 50; i++) {
     let x = Math.random() * window.innerWidth;
     let y = Math.random() * window.innerHeight;
     ctx.beginPath();
     ctx.arc(x, y, 30, 0, Math.PI * 2, false);
     ctx.stroke();
}
