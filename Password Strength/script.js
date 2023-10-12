let password = document.getElementById('pwd');
let message = document.getElementById('message');
let msg = document.querySelector('.msg');

password.addEventListener('input', ()=>{
    if(password.value.length>0){
       msg.style.display = 'block';
        message.style.display = 'block';
    }
    else{
        message.style.display = 'none';
    }
    if(password.value.length<4){
        message.innerHTML = 'weak';
        message.style.color = 'red';
        msg.style.color = 'red';
        password.style.borderColor = 'red';
    }
    if (password.value.length > 4 && password.value.length <8){
        message.innerHTML = 'medium';
        message.style.color = 'yellow';
        msg.style.color = 'yellow';
        password.style.borderColor = 'yellow';
    }
    if(password.value.length>8){
        message.innerHTML = 'strong';
        message.style.color = 'green';
        msg.style.color = 'green';
        password.style.borderColor = 'green';
    }
})