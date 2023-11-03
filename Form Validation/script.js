const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');
const inputName = document.getElementById('inputName');
const inputPhone = document.getElementById('inputPhone');
const inputEmail = document.getElementById('inputEmail');
const inputMessage = document.getElementById('inputMessage');
const submitBtn = document.getElementById('submitBtn');

inputName.addEventListener('keyup', f1 = () => {
    let name = inputName.value
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    // ^ - signals the start of a text (beginning of string)
    else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Enter full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

})

inputPhone.addEventListener('keyup', f2 = () => {
    let phone = inputPhone.value;
    if (phone.length != 10) {
        phoneError.innerHTML = 'Phone no should be of 10 digits';
        return false;
    }
    else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
})

inputEmail.addEventListener('keyup', f3 = ()=>{
    let email = inputEmail.value;
    if(email.length==0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    //regex - regular expression : searchs for in a string
    else if (!email.match(/^\S+@\S+\.\S+$/)){
        emailError.innerHTML = 'Invalid Email Id';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
})

inputMessage.addEventListener('keyup', f4 = ()=>{
    let message = inputMessage.value;
    let remaining = 30 - message.length; 
    if(remaining>0){
        messageError.innerHTML = `${remaining} more characters required`;
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
})

submitBtn.addEventListener('click', (event)=>{
    if(!f1() || !f2() || !f3() || !f4()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please check for errors!';
        event.preventDefault();
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        // return false;
    }
})