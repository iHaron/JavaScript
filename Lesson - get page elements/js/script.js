'use strict';

const box = document.getElementById(`box`); // получаем элемент по id
console.log(box);

const btns = document.getElementsByTagName(`button`); // получаем псевдомассив из тегов с именем (`button`)
console.log(btns[1]);

const circles = document.getElementsByClassName(`circle`); // получаем псевдомассив из классов с именем (`circle`)
console.log(circles);

const hearts = document.querySelectorAll(`.heart`); // получаем все подходящие элементы по css селектору
hearts.forEach(item => {console.log(item)});

const oneHeart = document.querySelector(`div`); // Получаем первый подходящий элемент на страничке
console.log(oneHeart);

const wrapper = document.querySelector(`.wrapper`);

// box.style.backgroundColor = `blue`;
// box.style.width = `500px`;

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = `100%`;
circles[0].style.backgroundColor = `red`;

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = `blue`;
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement(`div`);
// const text = document.createTextNode(`Тут был я`);

div.classList.add(`black`);

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// // circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = `<h1>Hello Wolrd!</h1>`;

// div.textContent = `Hello!`;

div.insertAdjacentHTML(`afterend`, `<h2>Hello</h2>`);