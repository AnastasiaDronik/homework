let book = {
  title: "Лісова Пісня",
  author: "Леся Українка",
  pages: 152,
  getInfo: getInfo,
};

let book2 = {
  title: "Маруся Чурай",
  author: "Ліна Костенко",
  pages: 188,
  getInfo: getInfo,
};

function getInfo() {
  for (let key in this) {
    if (typeof this[key] != "function") {
      console.log(key + " : " + this[key]);
    }
  }
}

book.getInfo();
book2.getInfo();
