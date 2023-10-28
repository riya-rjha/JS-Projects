let imgBox = document.querySelector('.img-box');
let imgOriginal = document.querySelector('.img-original');
let realImg = document.getElementById('original-img');
let arrow = document.getElementById('line');

// offsetWidth = width including padding and border
// offsetHeight = height including padding and border

//offsetLeft - includes left position + margin of element
//event.pageX - x-coordinates of element clicked

let leftSpace = imgBox.offsetLeft; //left Space of imageBox container
realImg.style.width = imgBox.offsetWidth + "px"; //setting width - 100% of original image

imgBox.addEventListener('mousemove', (event)=>{
    let boxWidth = (event.pageX - leftSpace) + "px";
    imgOriginal.style.width = boxWidth;
    arrow.style.left = boxWidth;
})
 