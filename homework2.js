let input = prompt('Скільки вам років?', "Введіть ваш вік");
let age = +input;
if (age >= 0) { 
    if (age === 11 || age === 12 || age === 14) {
    alert(" " + age + ' років')
    }
    else if (age % 10 === 1) {
        alert("тобі " + age + ' років')
        ("тобі " + age + ' рік')
    }
    else if (age % 10 === 2 || age % 10 === 3|| age % 10 === 4) {
        alert("тобі " + age + ' роки')
    }
    else {
        alert("тобі " + age + ' років')
    };
}
else {
    alert('Ви ввели якусь фігню! Спробуйте ще.')
};
