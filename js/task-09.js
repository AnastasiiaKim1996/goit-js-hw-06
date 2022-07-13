function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");

const spanColor = document.querySelector(".color");

const button = document.querySelector(".change-color");

button.onclick = function () {
  body.style.backgroundColor = getRandomHexColor();
};
