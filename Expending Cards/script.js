const redBtn = document.querySelector('.red');
const orangeBtn = document.querySelector('.orange');
const imageBox = document.querySelector('.imgBox')
const rightHeading = document.querySelector('.right-heading')
const priceBtn = document.querySelector('.btn')
const body = document.querySelector('body')
const imageDiv = document.querySelector('.imageDiv')
const amtText = document.getElementById('price')
const image = document.getElementById('image')


redBtn.addEventListener('click',()=>{
    image.src = "https://iili.io/d9ueSM7.png"
    imageBox.style.backgroundColor = "#BD072D"
    rightHeading.style.color = "#BD072D"
    priceBtn.style.backgroundColor = "#BD072D"
    body.style.backgroundColor = "#7E021C"
    amtText.style.color = "#BD072D"
    amtText.innerText = "Rs. 12,500"
    
})

orangeBtn.addEventListener('click',()=>{
    image.src = "https://iili.io/d9ueLwQ.png"
    imageBox.style.backgroundColor = "#F18557"
    rightHeading.style.color = "#F18557"
    priceBtn.style.backgroundColor = "#F18557"
    body.style.backgroundColor = "#CE5B39"
    amtText.style.color = "#F18557"
    amtText.innerText = "Rs. 10,999"
})

