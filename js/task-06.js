const inputEl = document.querySelector(`input[data-length="6"]`);

inputEl.addEventListener("blur", (event) => {
  const length = event.currentTarget.value.length;

  if (length <= inputEl.dataset.length) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
});
