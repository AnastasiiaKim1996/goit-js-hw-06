const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// //-- create elem --//

// const createItem = document.createElement("li").classList.add("item");

// // -- reduce --//

// const addItem = ingredients.reduce(
//   (acc, element) => acc + `<li>${element}</li>`,
//   ""
// );
// //-- paste to DOM --//

// list.innerHTML = addItem;

//-- * виправлена робота *--//

const ulList = document.querySelector("#ingredients");

const items = ingredients.map((el) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = el;
  return li;
});

ulList.append(...items);
