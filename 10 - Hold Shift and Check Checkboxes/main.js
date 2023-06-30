const inputs = [...document.querySelectorAll('input')];

let shiftKeyPressed = false;
let currentSelectedIndex = null;


const handleKeydown = e => {
    if(e.key !== 'Shift') return;
    shiftKeyPressed = true
};

const handleKeyup = e => {
    if(e.key !== 'Shift') return;
    shiftKeyPressed = false
};

const handleInputChange = e => {
    if (!e.target.checked) {
        currentSelectedIndex = null;
        return;
    }

    let inputIndex = inputs.findIndex((input) => input === e.target);
    
    if(currentSelectedIndex !== null && shiftKeyPressed) {
        const [ minIndex, maxIndex ] = inputIndex > currentSelectedIndex ? [ currentSelectedIndex, inputIndex ] : [ inputIndex, currentSelectedIndex ];

        for(let i = minIndex; i <= maxIndex; i++) {
            inputs[i].checked = true;
        }
    }
    currentSelectedIndex = inputIndex;
}

document.addEventListener('keydown', handleKeydown);
document.addEventListener('keyup', handleKeyup);

inputs.forEach(input => {
    input.addEventListener('change', handleInputChange);
});