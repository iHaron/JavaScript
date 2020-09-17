/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// function removeAdv(){
//     const adv = document.getElementsByClassName("promo__adv");
//     adv[0].remove();
// }
// removeAdv();

// function addNewGenreName (){
//     const oldGenreName = document.getElementsByClassName("promo__genre");
//     let newGenreName = document.createElement(`div`);
//     newGenreName.className = `promo__new_genre`;
//     newGenreName.innerText = `ДРАМА`;
//     newGenreName.style.color = `white`;
//     oldGenreName[0].replaceWith(newGenreName);
// }
// addNewGenreName();

// function changeBgImage () {
    
// }

// changeBgImage();

// const adv = document.querySelectorAll(`.promo__adv img`),
//       poster = document.querySelector(`.promo__bg`),
//       genre = poster.querySelector(`.promo__genre`),
//       movieList = document.querySelector(`.promo__interactive-list`);

// adv.forEach(item => {
//     item.remove();
// });

// genre.textContent = `Драма`;

// poster.style.backgroundImage = `url("img/bg.jpg")`;

// movieList.innerHTML = '';

// movieDB.movies.sort();


// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });

const div = document.querySelector(`.promo__adv`),
      genre = document.querySelector(`.promo__genre`),
      background = document.querySelector(`.promo__bg`),
      films = document.querySelector(`.promo__interactive-list`);
div.remove();
genre.textContent = `Драма`;
background.style.backgroundImage = (`url("img/bg.jpg")`);
films.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    films.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
})