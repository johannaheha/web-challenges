console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector ('[data-js="second-input"]');

const switchButton = document.querySelector('[data-js="button-switch"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toLowerCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
   secondInput.value = secondInput.value.toUpperCase();
});
//Werte tauschen zw 1&2 input
switchButton.addEventListener("click", () => {
  const temp = firstInput.value; //temporäre Variable
  firstInput.value = secondInput.value;
  secondInput.value = temp;
})