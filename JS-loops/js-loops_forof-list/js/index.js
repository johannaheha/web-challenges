console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--

for(const language of programmingLanguages){
  const listItem = document.createElement("li");  //li erstellen
  listItem.textContent = language;                 // Text setzen
  ol.appendChild(listItem);                        // an ol anhängen

}

// --^-- write or modify code above this line --^--
