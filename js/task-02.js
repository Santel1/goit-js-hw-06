const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  fragment.appendChild(liEl);
}
ingredientsList.appendChild(fragment);
