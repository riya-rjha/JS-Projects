var img = document.getElementById('icon');
img.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains = 'dark-mode'){
        img.src = 'sun.png';
    }
    else{
        img.src = 'moon.png';
    }
})

