
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Regular console.');

// Interpolated
console.log("Hello This is %s running!", "javascript");

// Styled
const styles = ['color: green', 'font-size: 2rem', 'font-weight: 600'].join(';  ');
console.log("This is styled text %c 'Hello' %c this is not styled text.", styles, "");

// warning!
console.warn('This is a warning!!!!!!')

// Error :|
console.error('This is an error :|')

// Info
console.info("This is Info!");

// Testing

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing