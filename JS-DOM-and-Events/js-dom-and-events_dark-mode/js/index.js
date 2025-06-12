console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const buttonDark = document.querySelector ('[data-js="dark-mode-button"]');
buttonDark.addEventListener ("click", () => {bodyElement.classList.add("dark")});

const buttonLight = document.querySelector ('[data-js="light-mode-button"]');
buttonLight.addEventListener ("click", () => {bodyElement.classList.remove("dark")});

const buttonToggle = document.querySelector ('[data-js="toggle-button"]')
buttonToggle.addEventListener ("click", () => {bodyElement.classList.toggle("dark")});


