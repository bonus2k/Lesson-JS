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

const promoAdv = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    filmList = document.querySelector(".promo__interactive-list");

//Удаляем рекламу
promoAdv.forEach(img => {
    img.remove();
});

//Меняем жанр
promoBg.querySelector('.promo__genre').innerHTML = "драма";

//Меняем бэк
promoBg.style.cssText = 'background-image:url(./img/bg.jpg)';

//Формируем список фильмов из массива
filmList.innerHTML = "";
movieDB.movies.forEach((film, i) => {
    filmList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>`;
});