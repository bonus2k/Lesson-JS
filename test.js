
while (true) {
    const a = prompt("?", "");
    console.log("Тип:", typeof(a));
    console.log("Строка:", a);
    console.log("Boolean:", Boolean(a));
    console.log("Boolean(+a):", Boolean(+a));
    console.log('Число:', +a);
    console.log(alert(+a));
    console.log('isNan:', isNaN(+a));
    console.log('ParseInt:', parseInt(a, 10));
    console.log('==========');
    if (a==="exit"){
        break;
    }
}


