const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

//-- create elem --//

const createItem = document.createElement("li");

createItem.classList.add("item");
// -- reduce --//

const addItem = ingredients.reduce(
  (acc, element) => acc + `<li>${element}</li>`,
  ""
);
//-- paste to DOM --//

list.innerHTML = addItem;
