let display = document.getElementById('input');
let msg = "";
//All numerics & symbols
const buttonClick = (value) =>{
    msg += value; 
    display.value = msg;
}

//AC - Clear all
let reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    display.value = '';
})

//DE - Delete last element
let del = document.getElementById('del');
del.addEventListener('click', ()=>{
    msg = msg.slice(0, -1); // Remove the last character from msg
    display.value = msg;
})

let btn = document.getElementById('equalSign');
btn.addEventListener('click', newFunc = () =>{
     evaluate();
    setInterval(() => {
        if(display.value === ''){
            location.reload();
        }
    }, 5000);
   
})

display.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        event.preventDefault();
        newFunc();
    }
})

const evaluate = () =>{
    let expression = display.value;
    let nos;
    let ans = 0;
    for(let i=0; i<expression.length; i++){
        switch (expression[i]) {
            case '+':
                nos = expression.split('+');
                //convert string to numeric values
                ans += parseFloat(nos[0]) + parseFloat(nos[1]);
                break;
            case '*':
                nos = expression.split('*');
                //convert string to numeric values
                ans += parseFloat(nos[0]) * parseFloat(nos[1]);
                break;
            case '-':
                nos = expression.split('-');
                //convert string to numeric values
                ans += parseFloat(nos[0]) - parseFloat(nos[1]);
                break;
            case '/':
                nos = expression.split('/');
                //convert string to numeric values
                ans += parseFloat(nos[0]) / parseFloat(nos[1]);
                break;
        
            default:
                break;
        }
    }
    display.value = ans;
}

