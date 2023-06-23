const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', handleClick);
    panel.addEventListener('transitionend', handleTransitionend);
});

function handleClick(e) {
    this.classList.toggle('open');
}

function handleTransitionend(e) {
    if(e.propertyName === 'flex-grow') {
        this.classList.toggle('open-active');
    }
}