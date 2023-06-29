
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');

function makeGreen() {
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
console.assert(1 === 2, "1 === 2 Evaluated to false");

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
console.groupCollapsed('First group collapsed');
console.log('Hello 1');
console.log('World 1');
console.groupEnd('First group');
console.group('Second group');
console.log('Hello 2');
console.log('World 2');
console.groupEnd('Second group');

// counting
console.group("Counting")
console.count("John");
console.count("Denis");
console.count("John");
console.count("Doe");
console.count("John");
console.count("John");
console.count("Denis");
console.count([1, 2, 3, 4, 5]);
console.count([1, 2, 3, 4, 5]);
console.groupEnd("Counting")

// timing
console.time("Fetching data");
// Fetching...
console.timeEnd("Fetching data");