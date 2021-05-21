const clockNumebr = document.querySelectorAll('.clock-number');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const electronicClockTextElement = document.querySelector('.electronic-clock');

function setTime() {
    const getTime = new Date();
    let secondRatio = (getTime.getSeconds() / 60) * 360;
    let minuteRatio = (getTime.getMinutes() / 60) * 360 + secondRatio / 60;
    let hourRatio = (getTime.getHours() / 12) * 360 + minuteRatio / 12;
    secondHand.style.transform = `rotateZ(${secondRatio}deg)`;
    minuteHand.style.transform = `rotateZ(${minuteRatio}deg)`;
    hourHand.style.transform = `rotateZ(${hourRatio}deg)`;
    electronicClockTextElement.innerText = `${getTime.toTimeString()}`;
}

clockNumebr.forEach(number => {
    let rotateRatio = (number.dataset.framework / 12) * 360;
    number.style.transform = `rotateZ(${rotateRatio}deg)`;
});

setInterval(() => {
    setTime();
}, 1000);


