console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
} //Funktion zum Verstecken der Fehlermeldung. hidden-Attribut wird gesetzt.

function showTosError() {
  tosError.removeAttribute("hidden");
} // Funktion zum Anzeigen der Fehlermeldung. hidden-Attribut wird removed.

hideTosError();

tosCheckbox.addEventListener("input", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {showTosError();}
  }); // wenn Checkbox checked --> 
  // Dann Fehlermeldung verstecken! 
  // Ist sie nicht geklickt dann showTosError.

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (!tosCheckbox.checked){
    showTosError();
    return;  // bricht die Funktion ab, geht also nicht weiter zum Alert.
  }

  hideTosError();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
