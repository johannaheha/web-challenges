console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--

for (const key in languages){
  const option = document.createElement("option");    // option erstellen
  option.value = languages[key];                  // Wert setzen
  option.textContent = languages[key];                  // Text inhalt setzen
  select.appendChild(option);                        // optioin in select einfügen
}

// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

console.log(nav)

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--

for(const page in nav) {
  const listElement = document.createElement("listElement");     //li erstellen
  const anchorTag = document.createElement("anchorTag");       //a erstellen
  a.href = nav[page].href;                     //href setzen
  a.textContent = nav[page].text;               // linktext setzen
  listElement.appendChild(anchorTag);            //a ins li
  ul.appendChild(listElement);                   //li ins ul
}

// --^-- write or modify code above this line --^--

