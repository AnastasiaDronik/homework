let input = prompt('Скільки вам років?', "Введіть ваш вік");
let age = +input;
if (input === null) {
    alert("Введіть ваш вік!");
} 
else if (age >= 0) { 
    if (age === 11 || age === 12 || age === 13 || age === 14) {
        alert("Вам " + age + ' років.')
    }
    else if (age % 10 === 1) {
        alert("Вам " + age + ' рік.')
    }
    else if (age % 10 === 2 || age % 10 === 3|| age % 10 === 4) {
        alert("Вам " + age + ' роки.')
    }
    else {
        alert("Вам " + age + ' років.')
    };
}
else {
    alert('Ви ввели якусь фігню! Спробуйте ще.')
};
