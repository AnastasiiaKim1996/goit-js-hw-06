function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");

const spanColor = document.querySelector(".color");

const button = document.querySelector(".change-color");

// const body = document.querySelector("body");
// const button = document.querySelector(".change-color");
// let color = document.querySelector(".color");
// button.addEventListener("click", changeColor);
// function changeColor() {
// const newColor = getRandomHexColor();
// body.style.backgroundColor = newColor;
// color.textContent = `${newColor}`;
// // }
// let newColor = (spanColor.textContent = getRandomHexColor());
// if ((body.style.backgroundColor = newColor)) {
// }
