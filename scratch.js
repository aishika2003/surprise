function nextstep(event){
    event.preventDefault();

    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');
    step3.style.display = 'none';
    step4.style.display = 'block';
}

let canvas = document.getElementById('scratch-canvas');
let context = canvas.getContext("2d");

const init = () => {
    context.fillStyle = "rgb(18, 125, 125)";
    context.fillRect(0, 0, 300, 100)
};

let isDragging = false;

const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 24, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
};

canvas.addEventListener("mousedown", (event) => {
    isDragging = true;
    let rect = canvas.getBoundingClientRect();
    scratch(event.clientX - rect.left, event.clientY - rect.top);
});

canvas.addEventListener("mousemove", (event) => {
    if(isDragging){
        let rect = canvas.getBoundingClientRect();
        scratch(event.clientX - rect.left, event.clientY - rect.top);
    }
});

canvas.addEventListener("mouseup", () => {
    isDragging = false;
});
canvas.addEventListener("mouseleave", (event) => {
    isDragging = false;
});



init();