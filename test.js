let main = {
    a: 10,
    b: 20,
    c:{
        d:11,
        e:13
    }
};

let copy = {};

Object.assign(copy, main);

copy.a = 11;
copy.c.d = 12;

console.log(main);
console.log(copy);
