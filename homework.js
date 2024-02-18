let book = {
  title: "Лісова Пісня",
  author: "Леся Українка",
  pages: 152,
};

let book2 = {
    title: "Маруся Чурай",
    author: "Ліна Костенко",
    pages: 188,
  };

  function getInfo(object) {
    for (let key in this) {
      console.log(key + " : " + this[key]);
    }
  }

getInfo.call(book);