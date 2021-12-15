/* Задания на урок lesson6:

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
        "Одержимость",
        "Скотт Пилигрим против...",
        "Ла-ла лэнд"
    ]
};


const promoAdv = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    filmList = document.querySelector(".promo__interactive-list"),
    addItem = document.querySelector(".add"),
    btn = addItem.getElementsByTagName("button"),
    addInput = addItem.querySelector(".adding__input"),
    check = addItem.querySelector("input[type='checkbox']");

addItem.addEventListener("submit", event => {
    event.preventDefault();
    let text = addInput.value;
    if (text) {
        if (text.length > 21) {
            text = (`${text.substr(0, 22)}...`);
        }
        movieDB.movies.push(text);
        createMoveList();

        if (check.checked) {
            console.log("Добавляем любимый фильм");
        }
    }
    event.target.reset();
});

//Удаляем рекламу
promoAdv.forEach(img => {
    img.remove();
});

//Меняем жанр
promoBg.querySelector('.promo__genre').innerHTML = "драма";

//Меняем бэк
promoBg.style.cssText = 'background-image:url(./img/bg.jpg)';

//Формируем список фильмов из массива
createMoveList();

function createMoveList( ) {
    movieDB.movies.sort((a, b) => {
        return a.localeCompare(b);
    });
    filmList.innerHTML = "";
    movieDB.movies.forEach((film, i) => {
        filmList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;
    });

    const trash = document.querySelectorAll(".delete");
    trash.forEach((btn, i) => {
        btn.addEventListener('click', event => {
            movieDB.movies.splice(i, 1);
            createMoveList();
        });
    });
}

