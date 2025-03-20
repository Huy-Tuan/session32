const clickDown = document.getElementById("click-me");
const clickCount = document.querySelector("#count");
let count = 0;

clickDown.addEventListener("click", function () {
   clickCount.innerHTML = `Số lần bấm: ${++count}`; 
});
