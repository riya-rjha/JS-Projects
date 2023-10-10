let popup = document.querySelector('.popUp');
let btn1 = document.querySelector('.submit-btn');
let btn2 = document.querySelector('.ok');
btn1.addEventListener('click', () => {
    popup.classList.add("hide-display-property");
})
btn2.addEventListener('click', () => {
    popup.classList.remove("hide-display-property");
})


