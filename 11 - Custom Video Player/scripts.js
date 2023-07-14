document.addEventListener('DOMContentLoaded', e => {
    const player = document.querySelector('.player');
    const video = document.querySelector('video');
    const toggle = document.querySelector(".toggle");
    const progressBar = document.querySelector('.progress__filled');



    function toggleHandler() {
        // playPauseBtn.textContent = '►';
        // playPauseBtn.textContent = '❚ ❚';
        if(video.paused) {
            video.play();
        }
        else {
            video.pause();
        }
        
    }



    player.addEventListener('click', toggleHandler);
});
