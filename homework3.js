let unit = 'кг'; //сюди вводите одиницю вимірювання: "км", "год" або "кг"
let value = 12; //сюди вводите числове значення
switch (unit) {
    case "км":
        console.log(value + " " + unit + " це " + (value * 1000) + " м");
        break;
    case "год":
        console.log(value + " " + unit + " це " + (value * 60) + " хв");
        break;
    case "кг":
        console.log(value + " " + unit + " це " + (value * 1000) + " г");
        break;
    default:
        console.log("Наш калькулятор таке не обчислює...");
        console.log("Введіть одну з цих одиниць: км, год, кг, та спробуйте ще!");
}