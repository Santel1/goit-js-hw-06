const categoriesList = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${itemEl.length}`);

itemEl.forEach((element) => {
  const titleEl = element.querySelector("h2");

  console.log(`Category : ${titleEl.textContent}`);
  const itemLi = element.querySelectorAll("li");
  console.log(`Elements: ${itemLi.length}`);
});
