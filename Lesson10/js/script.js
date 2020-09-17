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

const div = document.querySelector(`.promo__adv`),
      genre = document.querySelector(`.promo__genre`),
      background = document.querySelector(`.promo__bg`),
      btn = document.querySelector(`.add button`),
      films = document.querySelector(`.promo__interactive-list`),
      inputValue = document.getElementsByClassName(`adding__input`);

let rmvBtn = document.getElementsByClassName(`delete`);
div.remove();
genre.textContent = `Драма`;
background.style.backgroundImage = (`url("img/bg.jpg")`);

const listOfFilms = function () {films.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    films.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film};
        <div class="delete"></div>
    </li>
    `;
});};
listOfFilms();

btn.addEventListener(`click`, e => {
    if(inputValue[0].value != '' && inputValue[0].value != null){
        if(inputValue[0].value.length > 21){
            movieDB.movies.push(inputValue[0].value.slice(0,21)+`...`);
        } else {movieDB.movies.push(inputValue[0].value);}
    } else {alert('Введите данные в поле!');}
    e.preventDefault();
    inputValue[0].value = "";
    listOfFilms();
    rmvBtn = document.getElementsByClassName(`delete`);
    for (let btns of rmvBtn){
        btns.addEventListener(`click`, e => {
            btns.parentElement.remove();
            movieDB.movies.splice(movieDB.movies.indexOf(btns.parentElement.textContent.slice(2,btns.parentElement.textContent.indexOf(`;`))), 1);
        });
    }
}, false);

for (let btns of rmvBtn) {
    btns.addEventListener(`click`, e => {
        btns.parentElement.remove();
        movieDB.movies.splice(movieDB.movies.indexOf(btns.parentElement.textContent.slice(2,btns.parentElement.textContent.indexOf(`;`))), 1);
    });}

