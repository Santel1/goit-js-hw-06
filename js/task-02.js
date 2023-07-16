const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients")

for (const ingredient of ingredients) {
  const liEl = document.createElement("li")
  liEl.classList.add("item")
  liEl.textContent = ingredient;
  ingredientsList.appendChild(liEl);
  
}