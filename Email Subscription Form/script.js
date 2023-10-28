const scriptURL = 'https://script.google.com/macros/s/AKfycbx04_TnECRjRY0D4PqFh_h1oukOKeU_rkBEVfwuuqZOmdGK4MfGD5dr3oStx_CoybqaKg/exec';
const form = document.forms['submit-to-google-sheet'];
let msg = document.getElementById('thanks');

form.addEventListener('submit', func = (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thankyou for subscribing!";
            setTimeout(() => {
                msg.innerHTML = '';
            }, 5000);
            form.reset();
        })
        .catch(error => {
            msg.innerHTML = "Oops! There seems to be an error!";
            setTimeout(() => {
                msg.innerHTML = '';
            }, 5000);
            form.reset();
        })
})

form.addEventListener('keypress', (event)=>{
    if(event.target === 'Enter'){
        event.preventDefault();
        func(event);
    }
})

// Email Sheets Link: https://docs.google.com/spreadsheets/d/1Ci2VQCiyRh8VcZ_mSAdoKSPF0OrDd96fObAVuAYG6Rs/edit?usp=sharing