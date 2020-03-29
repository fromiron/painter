const canvas = document.getElementById("jsCanvas");

let painting = false;

const onMouseMove = event => {
    const x = event.offsetX;
    const y = event.offsetY;
}

const onMouseDown = event => {
    painting = true;
}

const onMouseUp, onMouseLeave = event => {
    painting = false;
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("mouseleave", onMouseLeave)
}