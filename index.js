// let ac = document.querySelector(`.ac`);
// let pm = document.querySelector(`.pm`);
// let percent = document.querySelector(`.percent`);
// let division = document.querySelector(`.division`);
// let multiply = document.querySelector(`.multiplication`);
// let plus = document.querySelector(`.addition`);
// let minus = document.querySelector(`.subtraction`);
// let equal = document.querySelector(`.equal`);

// let seven = document.querySelector(`.number-7`);
// let eight = document.querySelector(`.number-8`);
// let nine = document.querySelector(`.number-9`);
// let four = document.querySelector(`.number-4`);
// let five = document.querySelector(`.number-5`);
// let six = document.querySelector(`.number-6`);
// let one = document.querySelector(`.number-1`);
// let two = document.querySelector(`.number-2`);
// let three = document.querySelector(`.number-3`);
// let zero = document.querySelector(`.number-0`);
// let dot = document.querySelector(`.decimal`);

// let upscreen = document.querySelector(`.up`);
// let downscreen = document.querySelector(`.down`);


// ac.addEventListener(`click`, () => {
//     upscreen.innerText = ` `;
//     downscreen.innerText = 0;
// });

// pm.addEventListener(`click`, () => {
//     if (downscreen.innerText < 0 || downscreen.innerText > 0){
//         downscreen.innerText *= -1;
//         upscreen.innerText = downscreen.innerText;
//     } else {
//         downscreen.innerText = upscreen.innerText *= -1;
//         upscreen.innerText = downscreen.innerText;
//     };
// });

// percent.addEventListener(`click`, () => {
//     if (downscreen.innerText < 0 || downscreen.innerText > 0){
//         downscreen.innerText /= 100;
//         upscreen.innerText = downscreen.innerText;
//     } else {
//         downscreen.innerText = upscreen.innerText / 100;
//         upscreen.innerText = downscreen.innerText;
//     };
// });

// seven.addEventListener(`click`, () => {
//     upscreen.innerText += 7;
// });
// eight.addEventListener(`click`, () => {
//     upscreen.innerText += 8;
// });
// nine.addEventListener(`click`, () => {
//     upscreen.innerText += 9;
// });
// four.addEventListener(`click`, () => {
//     upscreen.innerText += 4;
// });
// five.addEventListener(`click`, () => {
//     upscreen.innerText += 5;
// });
// six.addEventListener(`click`, () => {
//     upscreen.innerText += 6;
// });
// one.addEventListener(`click`, () => {
//     upscreen.innerText += 1;
// });
// two.addEventListener(`click`, () => {
//     upscreen.innerText += 2;
// });
// three.addEventListener(`click`, () => {
//     upscreen.innerText += 3;
// });
 
// zero.addEventListener(`click`, () => {
//     upscreen.innerText += 0;
// });
// dot.addEventListener(`click`, () => {
//     upscreen.innerText += `.`;
// });

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