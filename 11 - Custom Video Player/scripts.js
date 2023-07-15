document.addEventListener('DOMContentLoaded', e => {
    const player = document.querySelector('.player');
    const video = document.querySelector('video');
    const toggle = document.querySelector(".toggle");
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



    player.addEventListener('click', toggleHandler);
    video.addEventListener('play', updateBtn);
    video.addEventListener('pause', updateBtn);
});
