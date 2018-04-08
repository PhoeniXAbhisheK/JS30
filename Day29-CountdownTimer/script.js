const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const timerButtons = document.querySelectorAll("[data-time]");

let countdown;

function timer(secs) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + secs * 1000;
  displayTime(secs);
  displayEndTime(then);
  // console.log({now, then});
  countdown = setInterval(() => {
    const secsLeft = Math.round((then - Date.now()) / 1000);

    if (secsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTime(secsLeft);
  }, 1000);
}

function displayTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = (seconds % 60);
  const displayValue = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  timerDisplay.textContent = displayValue;
  document.title = displayValue;
  // console.log({ mins, secs });
}

function displayEndTime(timestamp) {
  const date = new Date(timestamp);
  const hrs = date.getHours();
  const mins = date.getMinutes();
  endTimeDisplay.textContent = `Be back at ${hrs > 12 ? hrs-12 : hrs} : ${mins < 10 ? '0' : ''}${mins}`;

}
// console.log(timerButtons);
timerButtons.forEach(button => button.addEventListener('click', () => timer(parseInt(button.dataset.time))));
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  timer(parseInt(this.minutes.value * 60));
  this.reset();
});
// timer(128);