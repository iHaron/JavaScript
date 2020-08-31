"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: "",
    genres: "",
    privat: false
};

let lastSeenMovie1 = prompt("Один из последних просмотренных фильмов?", "");
let rateOfLastSeenMovie1 = prompt("На сколько оцените его?", "");

let lastSeenMovie2 = prompt("Один из последних просмотренных фильмов?", "");
let rateOfLastSeenMovie2 = prompt("На сколько оцените его?", "");

personalMovieDb.movies[lastSeenMovie1] = rateOfLastSeenMovie1;

personalMovieDb.movies[lastSeenMovie2] = rateOfLastSeenMovie2;

console.log(personalMovieDb.movies)

// personalMovieDb.movies["lastSeenMovie1"] = rateOfLastSeenMovie1;

// console.log(personalMovieDb);
