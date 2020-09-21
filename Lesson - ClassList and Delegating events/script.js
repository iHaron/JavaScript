const btns = document.querySelectorAll(`button`),
      wrapper = document.querySelector(`.btn-block`);

// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add(`red`, `trtrtrtrtr`)); // classList.add = добавить класс
// // console.log(btns[0].classList.remove(`blue`)); // classList.remove = удалить класс
// console.log(btns[0].classList.toggle(`blue`)); // classList.toggle = добавить/удалить класс, в зависимости от его наличия;

// if (btns[1].classList.contains(`red`)){
//     console.log(`red`);
// }

btns[0].addEventListener(`click`, () => {
    // if (!btns[1].classList.contains(`red`)){
    //     btns[1].classList.add(`red`);
    // } else {
    //     btns[1].classList.remove(`red`);
    // }

    btns[1].classList.toggle(`red`);
});

// console.log(btns[0].className);

// Ниже делегирование с родителя wrapper его потомкам

wrapper.addEventListener(`click`, (event) => {
    if (event.target && event.target.tagName == "BUTTON"){ //event.target потому что не все элементы умеют в клик
        console.log("Hello!!");
    }
});

// Ниже делегирование с помощью .matches

event.target.matches(`button.red`);

// Ниже нет делегирования

// btns.forEach(btn => {
//     btn.addEventListener(`click`, () => {
//         console.log(`hello!`);
//     });
// });

const btn = document.createElement('button');
btn.classList.add(`red`);
wrapper.append(btn);