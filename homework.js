var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru", // Нам такі не підходять
  },
];

let emailArray = [];

let regex = /^[a-zA-Z0-9]*\.?[a-zA-Z0-9]+(@gmail|@yahoo)\.com/;

function checkEmail(array, regex, newArray) {
  for (let i in array) {
    if (regex.test(array[i].email) === true) {
      newArray.push(array[i].email)
    }
  }
}
checkEmail(arr, regex, emailArray);
console.log(emailArray);
