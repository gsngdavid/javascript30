const inputs = [...document.querySelectorAll('input')];
let lastCheckedIndex = null;

const handleInputChange = e => {
    if (!e.target.checked && !e.shiftKey) {
        lastCheckedIndex = null;
        return;
    }

    let checkedIndex = inputs.findIndex((input) => input === e.target);
    
    if(lastCheckedIndex !== null) {
        const [ minIndex, maxIndex ] = checkedIndex > lastCheckedIndex ? [ lastCheckedIndex, checkedIndex ] : [ checkedIndex, lastCheckedIndex ];

        for(let i = minIndex; i <= maxIndex; i++) {
            inputs[i].checked = true;
        }
    }
    lastCheckedIndex = checkedIndex;
}

inputs.forEach(input => {
    input.addEventListener('click', handleInputChange);
});