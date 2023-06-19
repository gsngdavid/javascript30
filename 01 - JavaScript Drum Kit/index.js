function playSound(event) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');
}

function removePlayingClass(event) {
    if(event.propertyName !== 'transform') return;
    
    event.target.classList.remove('playing');
}

document.addEventListener('keypress', playSound);

let keys = document.querySelector('.keys');
keys.addEventListener('transitionend', removePlayingClass);