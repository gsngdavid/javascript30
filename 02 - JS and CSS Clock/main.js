let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

let now = new Date();

let hours = now.getHours();
hours = hours > 12 ? Math.abs(hours - 12) : hours;
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let secondHandRotate = 90 + (seconds * 6) ;
let minuteHandRotate = 90 + (minutes * 6);
let hourHandRotate = 90 + (hours * 30);



setInterval(() => {
    secondHandRotate += 360 / 60;
    minuteHandRotate += 360 / (60 * 60);
    hourHandRotate += 360 / (60 * 60 * 60);
    
    console.log(new Date().toLocaleString());
    console.log(hours, minutes, seconds);

    secondHand.style.transform = `rotate(${secondHandRotate}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandRotate}deg)`;
    hourHand.style.transform = `rotate(${hourHandRotate}deg)`;
}, 1000);