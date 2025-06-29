console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorElement = document.querySelector(".error"); // Das Fehlerelement

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Hole die Operation vor der Berechnung
  const operation = event.target.operation.value;

  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);

  try {
    // Berechne das Ergebnis
    const result = operations[operation](firstNumber, secondNumber);
    output.innerText = result; // Zeige das Ergebnis
    errorElement.innerText = ""; // Leere das Fehler-Element
  } catch (error) {
    // Fehlerbehandlung
    errorElement.innerText = error.message;
    console.log(error.message);
    console.error(error.message);
    output.innerText = ""; // Leere das Ausgabe-Element
  }
});
