
console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  const createLi = document.createLi("li");
  createLi.classList.add ("toast-container__message");
  createLi.textContent = "blabla";
  toastContainer.append(createLi);
  console.log(createLi)
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML ="";

});
