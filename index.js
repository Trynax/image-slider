const sectionElem = document.querySelector('.current');
let currentSlide = 1;

function renderSlider(currentSlide) {
    sectionElem.src=`image/image${currentSlide}.jpg`;
}

renderSlider(currentSlide);

const prevElem = document.querySelector('.prev');
const nextElem = document.querySelector('.next');

function nextImage() {
    if (currentSlide < 3) {
        currentSlide++;
    } else {
        currentSlide = 1;
    }
    renderSlider(currentSlide);
}
function previousImage(){
    if (currentSlide > 1) {
        currentSlide--;
    } else {
        currentSlide = 3;
    }
    renderSlider(currentSlide);
}

nextElem.addEventListener('click', () => {
    nextImage();
});

prevElem.addEventListener('click', ()=>{
    previousImage()
})

setInterval(nextImage,5000);