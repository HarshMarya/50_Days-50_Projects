const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', ()=>{
    activeSlide++;

    if(activeSlide > slides.length - 1){
        activeSlide = 0
    }

    setBgToBody();
    setActiveSlides();
})

leftBtn.addEventListener('click', ()=>{
    activeSlide--;

    if(activeSlide < 0){
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlides();
})

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
setBgToBody()

function setActiveSlides(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}
