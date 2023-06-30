const inputs = document.querySelectorAll('input');
let lastChecked = null;
let inBetween = false;

const handleInputChange = e => {
    if (!e.target.checked) return lastChecked = null;
    if (!lastChecked || !e.shiftKey) return lastChecked = e.target;
    
    inputs.forEach(input => {
        if(input === e.target || input === lastChecked) {
            inBetween = !inBetween;
        }
        if(inBetween) input.checked = true;
    });
    lastChecked = e.target;
}

inputs.forEach(input => {
    input.addEventListener('click', handleInputChange);
});