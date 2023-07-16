function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector(`input[type="number"]`);
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxCont = document.querySelector("#boxes");
const fragment = document.createDocumentFragment();

console.log(inputValue, createBtn, destroyBtn);

createBtn.addEventListener("click", () => {
  const amount = Number(inputValue.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  clearBoxes();

  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement(`div`);
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(el);

    size += 10;
  }
  boxCont.appendChild(fragment);
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  boxCont.innerHTML = "";
}
