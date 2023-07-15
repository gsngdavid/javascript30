const player = document.querySelector('.player');
const video = document.querySelector('video');
const toggle = document.querySelector(".toggle");
const dataSkips = document.querySelectorAll('[data-skip]');
const progressBar = document.querySelector('.progress__filled');



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



player.addEventListener('click', toggleHandler);

video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);

dataSkips.forEach(btn => btn.addEventListener('click', skipHandler));
