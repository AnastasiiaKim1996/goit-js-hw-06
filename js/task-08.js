const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elementForm = event.currentTarget.elements;
  let email = elementForm.email.value;
  let password = elementForm.password.value;
  const formData = { email, password };
  if ((email.length < 1) & (password.length < 1)) {
    //    if (email === "" || password === "")
    alert("всі поля повинні бути заповнені");
  } else {
    console.log(formData);
  }
  form.reset();
}
