const randomColor = document.getElementById("change-background-random");

function changeBackground() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
randomColor.addEventListener('click', function () {
    document.body.style.background = changeBackground();
});