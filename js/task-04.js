const counterValue = document.querySelector("#value");
// console.log(counterValue);
let numbCountValue = Number(document.querySelector("#value").textContent);
// console.log(numbCountValue);

const decrementBtn = document.querySelector("#counter").firstElementChild;
// // - значення лічильника //

const incrementBtn = document.querySelector("#counter").lastElementChild;
// // + значення лічильника //

decrementBtn.addEventListener("click", (event) => {
  numbCountValue -= 1;
  //   numbCountValue - Number(decrementBtn.textContent);
  counterValue.innerHTML = numbCountValue;
  console.log("Зменшує значення лічильника");
});

incrementBtn.addEventListener("click", (event) => {
  numbCountValue += 1;
  //   numbCountValue += Number(incrementBtn.textContent);
  counterValue.innerHTML = numbCountValue;
  console.log("Збільшує значення лічильника");
});
