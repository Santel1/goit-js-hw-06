const inputSize = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

console.log(inputSize);
console.log(textEl);

inputSize.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value;

  console.log(fontSize);
  textEl.style.fontSize = fontSize + "px";
});
