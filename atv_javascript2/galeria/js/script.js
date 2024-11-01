let imgMin = document.querySelector('#img-min')
let imgMax = document.querySelector('#img-max')
let div = document.querySelector('.div-image-max')

imgMin.addEventListener('click', () => {
    div.style.display = "flex"
})

imgMax.addEventListener('click', () => {
    div.style.display = "none"
})