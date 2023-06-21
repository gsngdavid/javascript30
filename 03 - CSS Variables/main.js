let inputs = document.querySelectorAll('.controls input');

function handleUpdates() {
    let prefix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + prefix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdates));
