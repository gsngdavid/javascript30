document.addEventListener('keypress', handleSounds);

function handleSounds(event) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');
    setTimeout(() => removePlayingClass(event.keyCode), 100)
}

function removePlayingClass(keyCode) {
    let key = document.querySelector(`div[data-key="${keyCode}"]`);
    key.classList.remove('playing');
}