let time = document.getElementById('heading');
let startBtn = document.getElementById('startBTN');
let stopBtn = document.getElementById('stopBTN');
let resetBtn = document.getElementById('resetBTN');
let timer = null;
let [seconds, minutes, hours] = [0,0,0];

stopWatchTiming = () => {
    seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;
    }
    if(minutes==60){
        minutes = 0;
        hours++;
    }
    let h = hours<10 ? "0" + hours : hours;
    let m = minutes<10 ? "0" + minutes : minutes;
    let s = seconds<10 ? "0" + seconds : seconds;
    time.innerHTML = h+":"+m+":"+s;
}

startBtn.addEventListener('click',()=>{
    if(timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatchTiming, 1000);
})

stopBtn.addEventListener('click',()=>{
    clearInterval(timer);
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    time.innerHTML = "00:00:00";
})