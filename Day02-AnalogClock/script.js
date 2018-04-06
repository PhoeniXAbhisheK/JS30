const secondsHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

const secondsTime = document.querySelector('.clock-time .secs');
const minutesTime = document.querySelector('.clock-time .mins');
const hoursTime = document.querySelector('.clock-time .hrs');

function setDate() {

	const time = new Date();
	const seconds = time.getSeconds();
	const minutes = time.getMinutes();
	const hours = time.getHours();
	
	secondsTime.innerText = seconds;
	minutesTime.innerText = minutes;
	hoursTime.innerText = hours;

	secondsHand.style.transform = 'rotate('+((seconds*6)+90)+'deg)';
	minutesHand.style.transform = 'rotate('+((minutes*6)+90)+'deg)';
	hoursHand.style.transform = 'rotate('+((hours*30)+90)+'deg)';

	// console.log(hours+', '+minutes+', '+seconds);
}

setInterval(setDate, 1000);