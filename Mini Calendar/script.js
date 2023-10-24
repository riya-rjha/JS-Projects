const todayDate = new Date();

const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

date.innerHTML = (todayDate.getDate() < 10 ? "0" : "") + todayDate.getDate();
day.innerHTML = allDays[todayDate.getDay()];
month.innerHTML = allMonths[todayDate.getMonth()];
year.innerHTML = todayDate.getFullYear();