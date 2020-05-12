var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 100;
let y = 100;
let width = 100;
let height = 100;

var ctx = canvas.getContext("2d");
ctx.fillRect(x, y, width, height);
