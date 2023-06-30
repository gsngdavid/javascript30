const inputs = [...document.querySelectorAll('input')];
let currentSelectedIndex = null;

const handleInputChange = e => {
    if (!e.target.checked) {
        currentSelectedIndex = null;
        return;
    }

    let inputIndex = inputs.findIndex((input) => input === e.target);
    
    if(currentSelectedIndex !== null && e.shiftKey) {
        const [ minIndex, maxIndex ] = inputIndex > currentSelectedIndex ? [ currentSelectedIndex, inputIndex ] : [ inputIndex, currentSelectedIndex ];

        for(let i = minIndex; i <= maxIndex; i++) {
            inputs[i].checked = true;
        }
    }
    currentSelectedIndex = inputIndex;
}

inputs.forEach(input => {
    input.addEventListener('click', handleInputChange);
});