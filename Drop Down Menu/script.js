var options = document.getElementsByClassName('options');
var inputField = document.getElementById('media-type');
var selectedText = document.getElementById('selectedText');
let dropDown = document.getElementById('arrowImg');
let box = document.getElementById('items');

for (option of options) {
    //arrow functions do not go with this
    //arrow functions cannot describe this
    //normal functions have their own terms and definitions for this 
    option.onclick = function () {
        inputField.innerHTML = this.textContent;
        box.classList.toggle('display-bar');
        dropDown.classList.toggle('animation');
    }
}


dropDown.addEventListener('click', () => {
    box.classList.toggle('display-bar');
    dropDown.classList.toggle('animation');
})