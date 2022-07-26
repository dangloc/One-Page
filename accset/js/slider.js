const positionImg = document.querySelectorAll('#slider background');
const ImgSlider = document.querySelector('#slider');
const imgNUm = positionImg.length
let index = 0;

positionImg.forEach(function(img, index) {
    img.style.left = index*100 + '%'
})

function imgslider()
{
    index++;
    console.log(index);
    if(index >= imgNUm) {index = 0}
    slider(index)
}

function slider(){
    ImgSlider.style.left = "-" + index*100 + "%"
}
setInterval(imgslider,5000)