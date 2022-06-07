const upscreen = document.querySelector(`.up`);
const downscreen = document.querySelector(`.down`);

const buttons = document.querySelector(`.buttons`);

buttons.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`ac`)) {
        upscreen.innerText = ` `;
        downscreen.innerText = 0;
    };

    if (e.target.classList.contains(`pm`)){

        if (downscreen.innerText < 0 || downscreen.innerText > 0){
        downscreen.innerText *= -1;
        upscreen.innerText = downscreen.innerText;
    } else {
        downscreen.innerText = upscreen.innerText *= -1;
        upscreen.innerText = downscreen.innerText;
    };
    };

    if (e.target.classList.contains(`percent`)){
        if (downscreen.innerText < 0 || downscreen.innerText > 0){
        downscreen.innerText /= 100;
        upscreen.innerText = downscreen.innerText;
        } else {
            downscreen.innerText = upscreen.innerText / 100;
            upscreen.innerText = downscreen.innerText;
         };
    };


    if (e.target.classList.contains(`number-7`)){
        upscreen.innerText += 7;
    };
    if (e.target.classList.contains(`number-8`)){
        upscreen.innerText += 8;
    };
    if (e.target.classList.contains(`number-9`)){
        upscreen.innerText += 9;
    };
    if (e.target.classList.contains(`number-4`)){
        upscreen.innerText += 4;
    };
    if (e.target.classList.contains(`number-5`)){
        upscreen.innerText += 5;
    };
    if (e.target.classList.contains(`number-6`)){
        upscreen.innerText += 6;
    };
    if (e.target.classList.contains(`number-1`)){
        upscreen.innerText += 1;
    };
    if (e.target.classList.contains(`number-2`)){
        upscreen.innerText += 2;
    };
    if (e.target.classList.contains(`number-3`)){
        upscreen.innerText += 3;
    };
    if (e.target.classList.contains(`number-0`)){
        upscreen.innerText += 0;
    };
    if (e.target.classList.contains(`decimal`)){
        upscreen.innerText += `.`;
    };


    if (e.target.classList.contains(`division`)){
        upscreen.innerText += `/`;
    };
    if (e.target.classList.contains(`multiplication`)){
        upscreen.innerText += `*`;
    };
    if (e.target.classList.contains(`addition`)){
        upscreen.innerText += `+`;
    };
    if (e.target.classList.contains(`subtraction`)){
        upscreen.innerText += `-`;
    };
    if (e.target.classList.contains(`equal`)){
        downscreen.innerText = eval(upscreen.innerText);
        upscreen.innerText = downscreen.innerText;
    };
});
















// division.addEventListener(`click`, () => {
//     upscreen.innerText += `/`;
// });

// multiply.addEventListener(`click`, () => {
//     upscreen.innerText += `*`;
// });

// plus.addEventListener(`click`, () => {
//     upscreen.innerText += `+`;
// });

// minus.addEventListener(`click`, () => {
//     upscreen.innerText += `-`;
// });

// equal.addEventListener(`click`, () => {
//     downscreen.innerText = eval(upscreen.innerText);
//     upscreen.innerText = downscreen.innerText;
// });