/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Ла-ла лэнд"
    ]
};

movieDB.movies.sort();

//1 variant
// const promoAdv = document.querySelectorAll('.promo__adv');
// promoAdv.forEach(item=>{
// item.remove();
// });

//2 varian
const promoAdv = document.querySelectorAll('.promo__adv img');
promoAdv.forEach(img => {
    img.remove();
});



//3 varian
// const promoAdv = document.getElementsByClassName('promo__adv');
// for (let index = 0; index < promoAdv.length; index++) {
//     promoAdv[index].remove();
// }


const genre = document.querySelector('.promo__genre');
genre.innerHTML = "драма";

const promoBg = document.querySelector('.promo__bg');
promoBg.style.cssText = 'background-image:url(./img/bg.jpg)';
// promoBg.style.background = 'url(./img/bg.jpg)';

//1 variant
// const filmList = document.querySelectorAll(".promo__interactive-item");
// for (let index = 0; index < filmList.length; index++) {
//     filmList[index].innerHTML = `${index+1}. ${movieDB.movies[index]}`;

// }

//2 varian
const filmList = document.querySelector(".promo__interactive-list");
filmList.innerHTML = "";
movieDB.movies.forEach((film, i) => {
    filmList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>`;
});