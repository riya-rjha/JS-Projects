let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let toastBox = document.getElementById('toastBox');

btn1.addEventListener('click', () => {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = '<i class="fa-solid fa-circle-check"></i>Successfully Submitted';
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
});

btn2.addEventListener('click', ()=>{
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
    toastBox.appendChild(toast);
    toast.classList.add('error');
    setTimeout(() => {
        toast.remove();
    }, 5000);
});

btn3.addEventListener('click', () => {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again!';
    toastBox.appendChild(toast);
    toast.classList.add('invalid');
    setTimeout(() => {
        toast.remove();
    }, 5000);
});

