'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper');


box.style.width = '325px';
box.style.height = '5px';
box.style.background = 'purple';
let div = document.createElement('div');

div.style.background = '#256896';
div.style.width = '325px';
div.style.height = '80px';
// div.classList.add('black');
wrapper.append(div);
div.style.textAlign ="center";
div.style.lineHeight = "80px";
div.style.marginTop = "20px";
div.style.color = "white";
div.style.fontSize = "50px";
div.innerHTML="Hello world";
// circle[0].prepend(div);

// circle[2].remove();

// circle[1].replaceWith(hearts[2]);