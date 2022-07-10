const numberOfCategories =
  document.querySelector("#categories").children.length;

console.log(`Number of categories ${numberOfCategories}`);

const categoriesElem = document.querySelectorAll("#categories > li");

categoriesElem.forEach((element) => {
  console.log(
    ` Category: ${element.firstElementChild.textContent}, Elements: ${element.lastElementChild.children.length}`
  );
});
