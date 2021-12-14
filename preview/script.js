const btn = document.querySelector('button'),
    div = document.createElement('div'),
    a = document.querySelector('a');
// btn.onclick = function(){
// console.log("Click");
// };

btn.addEventListener('click', () => {
    if (document.getElementById("redButton") == null) {
        document.body.append(div);
        console.log(document.body.childNodes);
        console.dir(document.body.childNodes);
    } else {
        div.remove();
    }

});

a.addEventListener('click', e => {
    e.preventDefault();
});

div.setAttribute("id", "redButton");
div.style.height = "50px";
div.style.width = "300px";
div.style.background = "red";
div.innerHTML = "Hello";
div.style.textAlign = "center";
div.style.fontSize = '25px';
div.style.color = "white";
div.style.lineHeight = "50px";
div.style.borderRadius = "5px";
div.style.margin = "10px";
div.addEventListener('click', (e) => {
    e.target.remove();
});

console.log(document.querySelector('#btn').parentNode);
console.log(document.querySelector('#btn').nextSibling);
console.log(document.querySelector('#btn').nextElementSibling);
