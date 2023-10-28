let number = document.getElementById('number');
let count = 0;

setInterval(() => {
    if(count === 65){
        clearInterval();
    }
    else{
        count = count + 1;
        number.innerHTML = count + "%";

    }
}, 20);

//440 - 440 * (number/100)