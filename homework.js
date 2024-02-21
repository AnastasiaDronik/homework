const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Партнер 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Партнер 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Партнер 1.2.1",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
            {
              name: "Партнер 1.2.2",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
              partners: [
                {
                  name: "Партнер 1.2.2.3",
                  type: "subSubCompany",
                  uses: "Рішення для продажу квитків",
                  sells: "Рішення для продажу квитків",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};

function findValueByKey(obj, companyName) {
  if (obj.name === companyName) {
    console.log(obj);
    return;
  } else if ("clients" in obj) {
    let clients = obj.clients;
    for (let i in client) {
      findValueByKey(clients[i], companyName);
    }
  } else if ("partners" in obj) {
    let partners = obj.partners;
    for (let i in partners) {
      findValueByKey(partners[i], companyName);
    }
  }
}

findValueByKey(company, "Клієнт 2");
