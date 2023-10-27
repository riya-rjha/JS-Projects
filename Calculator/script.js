let display = document.getElementById('input');
let msg = "";
buttonClick = (value) =>{
    msg += value; 
    display.value = msg;
}