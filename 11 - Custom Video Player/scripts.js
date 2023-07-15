const player = document.querySelector('.player');
const subPlayer = document.querySelector('.player__controls');
const video = document.querySelector('video');
const toggle = document.querySelector(".toggle");
const dataSkips = document.querySelectorAll('[data-skip]');
const inputRanges = document.querySelectorAll("[type='range']");
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

let updateProgress = false;

function toggleHandler() {
    if(video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

function updateBtn() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skipHandler(e) {
    e.stopPropagation();
    const value = this.dataset.skip;
    video.currentTime = video.currentTime + +value;
}

function inputRangeHandler(e) {
    e.stopPropagation();
    video[this.name] = +this.value;
}

function progressBarHandler() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`;
}

function progressMoveHandler(e) {
    if(updateProgress) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }
}


player.addEventListener('click', toggleHandler);
toggle.addEventListener('click', toggleHandler);

video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', progressBarHandler);

dataSkips.forEach(btn => btn.addEventListener('click', skipHandler));
inputRanges.forEach(input => input.addEventListener('input', inputRangeHandler));

progress.addEventListener('mousedown', _=> updateProgress = true);
progress.addEventListener('mouseup', _=> updateProgress = false);
progress.addEventListener('mousemove', progressMoveHandler);

subPlayer.addEventListener('click', e => e.stopPropagation());