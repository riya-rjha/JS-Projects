let scrollContainer = document.getElementById('gallery');
let backBtn = document.getElementById('backBtn');
let frontBtn = document.getElementById('frontBtn');
backBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 1000;
})
frontBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 1000;
})
