let services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  "Миття голови": "100 грн",
  maxPrice: maxPrice,
  minPrice: minPrice,
  price: price,
};

function price() {
  let sum = 0;
  for (let key in this) {
    if (typeof this[key] != "function") {
      let num = Number.parseFloat(this[key]);
      sum = sum + num;
    }
  }
  console.log("Загальна вартість = " + sum + " грн");
}

function minPrice() {
    let min = 0;
    for (let key in this) {
      if (typeof this[key] != "function"){
      let num = Number.parseFloat(this[key]);
        if (min === 0)
        {min = num}
        else if (num <= min) {
          min = num;
        }
      }
    }
    console.log('Мінімальна ціна = ' + min + ' грн');
}

function maxPrice() {
  let max = 0;
  for (let key in this) {
    if (typeof this[key] != "function"){
    let num = Number.parseFloat(this[key]);
      if (num > max) {
        max = num;
      }
    }
  }
  console.log('Максимальна ціна = ' + max + ' грн');
}

services["розбити скло"] = "999.99 грн";
services.maxPrice();
services.price();
services.minPrice();