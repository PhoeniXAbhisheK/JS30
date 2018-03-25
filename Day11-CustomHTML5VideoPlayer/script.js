const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');
const volume = player.querySelector('.toggleVolume');
const speed = player.querySelector('.toggleSpeed');

function togglePlay() {

    const method = video.paused ? 'play' : 'pause';
    video[method]();

    // video[video.paused ? 'play' : 'pause']();

    // The below code will perform the same function as the above one, this just has better readablility.
    /*if (video.paused) {
        video.play();
    } else {
        video.pause();
    }*/
}

function updateButton(){

    toggle.textContent = this.paused ? 'Play' : 'Pause';

    // toggle.textContent = toggle.textContent !== 'Play' ? 'Play' : 'Pause';

    // The below code will perform the same function as the above one, this just has better readablility.
    /*const toggleStatus = toggle.innerHTML !== 'Play' ? 'Play' : 'Pause';
    toggle.innerHTML = toggleStatus;*/
}

function updateProgress(){
    progressBar.style.flexBasis = `${(video.currentTime/video.duration)*100}%`;
}

function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate(){
    video[this.name] = this.value;
}

function toggleVolume(){
    video.volume = video.volume === 0 ? 1 : 0;
}

function toggleSpeed(){
    video.playbackRate = 1;
}

function fetch(e){
    const fetchTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = fetchTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);

toggle.addEventListener('click', togglePlay);

volume.addEventListener('click', toggleVolume)

speed.addEventListener('click', toggleSpeed)

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', rangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));

let mousedown = false;

progress.addEventListener('click', fetch);
progress.addEventListener('mousemove', (e) => mousedown && fetch(e));
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousedown', () => mousedown = true);