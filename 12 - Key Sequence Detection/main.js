const secret = 'david';
console.log(`The secret is : ${secret}`);
const pressed = [];

document.addEventListener('keyup', e => {
    if(pressed.length === secret.length) pressed.shift();
    pressed.push(e.key);

    if(pressed.join('').includes(secret)) {
        console.log('DING DING!');
        cornify_add();
    }
});