const textInput = document.querySelector("#validation-input");

let inputLength = parseInt(textInput.getAttribute("data-length"));
console.log(inputLength);

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === +inputLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
});
