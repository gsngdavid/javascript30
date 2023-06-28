const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let isDrawing = false;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 2;

let lastX = 0;
let lastY = 0;
let hue = 0;
let incrementingWidth = true;

function draw(e) {
    if (!isDrawing) return;
    
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        incrementingWidth = !incrementingWidth;
    }

    incrementingWidth ? ctx.lineWidth++ : ctx.lineWidth--;
    
    hue >= 360 ? hue = 0 : hue++;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.stroke();
    
    lastX = e.offsetX;
    lastY = e.offsetY;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', e => isDrawing = false);
canvas.addEventListener('mouseout', e => isDrawing = false);