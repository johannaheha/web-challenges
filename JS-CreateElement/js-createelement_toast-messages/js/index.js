// const { createElement } = require("react");

console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  let createElement = document.createElement("li");
  createElement.classList.add ("toast-container__message");
  createElement.innerText = "blabla";
  toastContainer.append(createElement);
  console.log(createElement)
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML ="";

});
