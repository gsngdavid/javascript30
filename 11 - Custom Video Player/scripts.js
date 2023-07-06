document.addEventListener('DOMContentLoaded', e => {
    const video = document.querySelector('video');
    const playPauseBtn = document.querySelector("[title='Toggle Play']");

    let isPlaying = false;

    playPauseBtn.addEventListener('click', e => {
        if(isPlaying) {
            video.pause();
            playPauseBtn.textContent = '►';
            isPlaying = false;
        }
        else {
            video.play();
            playPauseBtn.textContent = '❚ ❚';
            isPlaying = true;
        }
    });
});
