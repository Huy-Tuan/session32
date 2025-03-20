function showImage(src) {
    document.getElementById('largeImage').src = src;
    document.querySelector('.overlay').style.display = 'flex';
}
function hideImage() {
    document.querySelector('.overlay').style.display = 'none';
}