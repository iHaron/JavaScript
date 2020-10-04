// const btn = document.querySelector(`.btn`);
// let timerId,
//     i = 0;

// function myAnimation () {
//     const elem = document.querySelector(`.box`);
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + `px`;
//             elem.style.left = pos + `px`;
//         }
//     }
// }

// btn.addEventListener(`click`, myAnimation);
// // btn.addEventListener(`click`, () => {
// //     // const timerId = setTimeout(logger, 2000);
// //     timerId = setInterval(logger, 500);
// // });

// // function logger () {
// //     if (i === 3) {
// //         clearInterval(timerId);
// //     }
// //     console.log(`text`);
// //     i++;
// // }

// // let id = setTimeout(function log() {
// //     console.log(`Hello`);
// //     id = setTimeout(log, 500);
// // }, 500);

'use strict';

const now = new Date(); // даты передаются с 0, а так же отображается время по utc

// new Date.parse(`2020-05-01`);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
