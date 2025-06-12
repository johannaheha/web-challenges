console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.


// --v-- write your code here --v--


document.querySelector ('[data-js="add"]');
document.querySelector ('[data-js="subtract"]');
document.querySelector ('[data-js="multiply"]');
document.querySelector ('[data-js="divide"]');
document.querySelector ('[data-js="exponent"]');
document.querySelector ('[data-js="modulo"]');

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

const addButton = document.querySelector ('[data-js="add"]');
addButton.addEventListener("click", () => {
  console.log(operand1+operand2);
})

const subtractButton = document.querySelector ('[data-js="subtract"]');
subtractButton.addEventListener("click", () => {
  console.log(operand1-operand2);
})
const multiplyButton = document.querySelector ('[data-js="multiply"]');
multiplyButton.addEventListener("click", () => {
  console.log(operand1*operand2);
})
const divideButton = document.querySelector ('[data-js="divide"]');
divideButton.addEventListener("click", () => {
  console.log(operand1/operand2);
})

const moduloButton = document.querySelector ('[data-js="modulo"]');
moduloButton.addEventListener("click", () => {
  console.log(operand1 % operand2);
})

const exponentButton = document.querySelector('[data-js="exponent"]');
exponentButton.addEventListener("click", () => {
  console.log(operand1 ** operand2);
});



// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

const increaseByOneButton = document.querySelector ('[data-js="increase-by-one"]');
increaseByOneButton.addEventListener("click",() => {operand1 += 1;
    console.log("operant1 is now:", operand1);});

    const increaseByFiveButton = document.querySelector('[data-js="increase-by-five"]');
increaseByFiveButton.addEventListener("click", () => {
  operand1 += 5;
  console.log("operand1 is now:", operand1);
});

const decreaseByOneButton = document.querySelector('[data-js="decrease-by-one"]');
decreaseByOneButton.addEventListener("click", () => {
  operand1 -= 1;
  console.log("operand1 is now:", operand1);
});

const decreaseByFiveButton = document.querySelector('[data-js="decrease-by-five"]');
decreaseByFiveButton.addEventListener("click", () => {
  operand1 -= 5;
  console.log("operand1 is now:", operand1);
});

const multiplyByTwoButton = document.querySelector('[data-js="multiply-by-two"]');
multiplyByTwoButton.addEventListener("click", () => {
  operand1 *= 2;
  console.log("operand1 is now:", operand1);
});

const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');
divideByTwoButton.addEventListener("click", () => {
  operand1 /= 2;
  console.log("operand1 is now:", operand1);
});



// --^-- write your code here --^--
