const time = Array.from(document.querySelectorAll('[data-time]'));
// Spread operator can also be used instead like below
// const time = [...document.querySelectorAll('[data-time]')];
const listItems = Array.from(document.querySelectorAll('li'));
const totalTime = document.querySelector('p.totalTime');

listItems.map(item => item.innerHTML += `<span class="vidDuration">${item.dataset.time}</span>`);

const totalSeconds = time
    .map(data => data.dataset.time)
    .map(newData => {
        const [mins, secs] = newData.split(':').map(parseFloat);
        return mins * 60 + secs;
    })
    .reduce((totalTime, seconds) => totalTime + seconds);


let remainder = totalSeconds;

const totalHrs = Math.floor(remainder / 3600);
remainder %= 3600;

const totalMins = Math.floor(remainder / 60);
remainder %= 60;

totalTime.innerHTML = `Total time : ${totalHrs} Hrs ${totalMins} Mins ${remainder} Secs`;
