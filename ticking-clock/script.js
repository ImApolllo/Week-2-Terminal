function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
function getSecondsAngle(sec) {
    sec %= 60; 
    return ((6 * sec) + 180) % 360;
}
function getMinutesAngle(sec) {
    sec %= 3600; 
    return ((6 * sec / 60) + 180) % 360;
}
function getHourAngle(sec) {
    sec %= 43200;
    return ((360 * sec / 43200) + 180) % 360;
}

const hour = document.querySelector('#hour');
const minute = document.querySelector('#minutes');
const second = document.querySelector('#seconds');

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    hour.style.transform = `rotate(${getHourAngle(time)}deg)`;
    minute.style.transform = `rotate(${getMinutesAngle(time)}deg)`;
    second.style.transform = `rotate(${getSecondsAngle(time)}deg)`;
}, 1000);