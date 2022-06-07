let ac = document.querySelector(`.ac`);
let pm = document.querySelector(`.pm`);
let percent = document.querySelector(`.percent`);
let division = document.querySelector(`.division`);
let multiply = document.querySelector(`.multiplication`);
let plus = document.querySelector(`.addition`);
let minus = document.querySelector(`.subtraction`);
let equal = document.querySelector(`.equal`);

let seven = document.querySelector(`.number-7`);
let eight = document.querySelector(`.number-8`);
let nine = document.querySelector(`.number-9`);
let four = document.querySelector(`.number-4`);
let five = document.querySelector(`.number-5`);
let six = document.querySelector(`.number-6`);
let one = document.querySelector(`.number-1`);
let two = document.querySelector(`.number-2`);
let three = document.querySelector(`.number-3`);
let zero = document.querySelector(`.number-0`);
let dot = document.querySelector(`.decimal`);

let upscreen = document.querySelector(`.up`);
let downscreen = document.querySelector(`.down`);


ac.addEventListener(`click`, () => {
    upscreen.innerText = ` `;
    downscreen.innerText = 0;
});

pm.addEventListener(`click`, () => {
    if (downscreen.innerText < 0 || downscreen.innerText > 0){
        downscreen.innerText *= -1;
        upscreen.innerText = downscreen.innerText;
    } else {
        downscreen.innerText = 0;
        upscreen.innerText = ` `;
    }
});

percent.addEventListener(`click`, () => {

})