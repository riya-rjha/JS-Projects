var countDownDate = new Date("Nov 14, 2023 00:00:00").getTime();
setInterval(updateTime, 1000);

function updateTime(){
    let nowDate = new Date().getTime();
    var dist = countDownDate - nowDate;

    var days = Math.floor(dist / (1000 * 60 * 60 * 24));
    var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((dist % (1000 * 60)) / 1000);

    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
    console.log(days, hours);

    if (dist < 0) {
        clearInterval();
        document.getElementById('day').innerHTML = "00";
        document.getElementById('hour').innerHTML = "00";
        document.getElementById('min').innerHTML = "00";
        document.getElementById('sec').innerHTML = "00";
    }
}