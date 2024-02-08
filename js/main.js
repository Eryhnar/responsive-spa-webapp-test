const previous = document.getElementById("previous");
const next = document.getElementById("next");

const images = ["red", "blue", "yellow", "green"];
let currentImage = 1;
let element = document.getElementById("content-area");



const changeImage = (direction) => {
    if (direction == "previous") {
        if(currentImage === 0) {
            currentImage = images.length - 1;
        } else {
            currentImage--;
        }
    } else {
        if(currentImage === images.length - 1) {
            currentImage = 0;
        } else {
            currentImage++;
        }
    }
    lastClass = element.classList[1];
    element.classList.remove(lastClass);
    element.classList.add(images[currentImage]);
}


previous.addEventListener("click", () => {
    changeImage("previous");
});
next.addEventListener("click", () => {
    changeImage("next");
});
