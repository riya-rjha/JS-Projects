let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');


setInterval(() => {
    const currTime = new Date();
    hrs.innerHTML = currTime.getHours() < 10 ? "0" + currTime.getHours() : currTime.getHours();
    mins.innerHTML = currTime.getMinutes() < 10 ? "0" + currTime.getMinutes() : currTime.getMinutes();
    secs.innerHTML = currTime.getSeconds() < 10 ? "0" + currTime.getSeconds() : currTime.getSeconds();
}, 1000);