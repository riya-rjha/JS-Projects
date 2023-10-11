let inputField = document.getElementById('pwd');
let imageField = document.getElementById('image');

imageField.addEventListener('click', ()=>{
    if(inputField.type == 'password'){
        inputField.type = 'text';
        imageField.src = 'Images/eye-open.png';
    }
    else{  
        inputField.type = 'password';
        imageField.src = 'Images/eye-close.png';
    }
})
