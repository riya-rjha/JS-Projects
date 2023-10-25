const genCodeBtn = document.getElementById('genCode');
const inputText = document.getElementById('text');
const qrCode = document.getElementById('qr-code');//div
const qrImg = document.getElementById('qrImg');//img

genCodeBtn.addEventListener('click', funcQR = () => {
    if (inputText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
        qrCode.classList.add('show-img');
    }
    else{
        inputText.classList.add('animationText');
        setTimeout(() => {
            inputText.classList.remove('animationText');
        }, 1000);
    }

});

inputText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        genCodeBtn.click();
        funcQR();
    }
})

