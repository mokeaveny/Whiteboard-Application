let canvas = document.getElementById("canvas");

canvas.width = 0.98 * window.innerWidth;
canvas.height = window.innerHeight;

let canvasContext = canvas.getContext("2d");

let x;
let y;
let mouseClicked = false;

window.onmousedown = (e) => {
    canvasContext.moveTo(x, y);
    mouseClicked = true;
}

window.onmouseup = (e) => {
    mouseClicked = false;
}

window.onmousemove = (e) => {
    x = e.clientX;
    y = e.clientY;

    if (mouseClicked == true)
    {
        canvasContext.lineTo(x,y);
        canvasContext.stroke();
    }
};