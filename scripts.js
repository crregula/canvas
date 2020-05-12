var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 100;
let y = 100;
let width = 100;
let height = 100;

var ctx = canvas.getContext("2d");

// Rectangle
// ctx.fillStyle = "rgba(255,0,0,0.5)";
// ctx.fillRect(x, y, width, height);
// ctx.fillStyle = "rgba(0,0,255,0.5)";
// ctx.fillRect(300, 300, width, height);
// ctx.fillStyle = "rgba(0,255,0,0.5)";
// ctx.fillRect(200, 200, width + 100, height - 50);

// Line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(200, 500);
// ctx.strokeStyle = "pink";
// ctx.stroke();

// Arc
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.stroke();

// Draw Multiple Circles
// for (let i = 0; i < 50; i++) {
//      let x = Math.random() * window.innerWidth;
//      let y = Math.random() * window.innerHeight;
//      ctx.beginPath();
//      ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//      ctx.stroke();
// }

function Circle(x, y, dx, dy, radius) {
     this.x = x;
     this.y = y;
     this.dx = dx;
     this.dy = dy;
     this.radius = radius;

     this.draw = function () {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.strokeStyle = "blue";
          ctx.stroke();
     };

     this.update = function () {
          if (this.x + radius > innerWidth || this.x - this.radius < 0) {
               this.dx = -this.dx;
          }

          if (this.y + radius > innerHeight || this.y - this.radius < 0) {
               this.dy = -this.dy;
          }

          this.x += this.dx;
          this.y += this.dy;

          this.draw();
     };
}

var circleArray = [];
for (let i = 0; i < 100; i++) {
     let radius = Math.random() * 30;
     circleArray.push(
          new Circle(
               Math.random() * (innerWidth - radius * 2) + radius,
               Math.random() * (innerHeight - radius * 2) + radius,
               (Math.random() - 0.5) * 10,
               (Math.random() - 0.5) * 10,
               radius
          )
     );
}

function animate() {
     requestAnimationFrame(animate);
     ctx.clearRect(0, 0, innerWidth, innerHeight);

     for (let i = 0; i < circleArray.length; i++) {
          circleArray[i].update();
     }
}
animate();
