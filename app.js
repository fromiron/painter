const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.0;

let painting = false;
let filling = false;

const stopPainting = () => painting = false;
const startPainting = () => painting = true;;
const handleColorChange = (event) =>
    ctx.strokeStyle = event.target.style.backgroundColor;

const handleModeChange = () => {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "Paint"
    }
}

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

const handleRangeChange = range => {
    ctx.lineWidth = event.target.value;
};

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorChange)
);

if (range) {
    range.addEventListener("input", handleRangeChange);
};

if (mode) {
    mode.addEventListener("click", handleModeChange);
};