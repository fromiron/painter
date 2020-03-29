const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.0;

let painting = false;

const stopPainting = () => painting = false;
const startPainting = () => painting = true;;
const handleColorClick = (event) =>
    ctx.strokeStyle = event.target.style.backgroundColor;


const onMouseMove = event => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath()
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
};





if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);