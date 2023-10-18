const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

const maxRadius = 50;
const minDistance = 10;
const colors = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgba(255, 99, 132, 0.5)",
];
let circles = [];

window.addEventListener('mousemove', (event) => {

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const radius = Math.random() * maxRadius;
    const x = mouseX;
    const y = mouseY;
    const color = colors[Math.floor(Math.random() * colors.length)];

    circles.push({ x, y, radius, color });

    for (let i = 0; i < circles.length; i++) {
        ctx.beginPath();
        ctx.arc(circles[i].x, circles[i].y, circles[i].radius, 0, Math.PI * 2);
        ctx.fillStyle = circles[i].color;
        ctx.fill();
    }
});

// clear canvas if users clicks spacebar

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 32) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        circles = [];
    }
}); 

