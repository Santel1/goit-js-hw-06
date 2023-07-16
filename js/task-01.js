const categoriesList = document.querySelector("#categories")
const itemEl = document.querySelectorAll(".item")
console.log(`Numbers of categories: ${itemEl.length}`)
const categories = []

itemEl.forEach(element => {
    const titleEl = element.querySelector("h2")
    categories.push(titleEl.textContent)
    console.log(`Category : ${titleEl.textContent}`)
    const itemLi = element.querySelectorAll("li")
    console.log(`Elements: ${itemLi.length}`)
});

