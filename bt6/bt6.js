
const textSize = document.querySelector("#text");
const btnIncrease = document.querySelector("#btnIncrease");
const btnReduce = document.querySelector("#btnReduce");


btnIncrease.addEventListener('click',function () {
    let currentSize = parseInt(window.getComputedStyle(textSize).fontSize);
    textSize.style.fontSize = (currentSize + 2) + "px";
});
btnReduce.addEventListener('click',function () {
    let currentSize = parseInt(window.getComputedStyle(textSize).fontSize);
    textSize.style.fontSize = (currentSize - 2) + "px";
});