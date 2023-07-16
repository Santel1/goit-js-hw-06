const form = document.querySelector(".login-form");

console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email === "" || password === "") {
    return alert("Please fill in all fields.");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});
