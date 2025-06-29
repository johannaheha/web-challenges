// components/Circle/Circle.js
import { getRandomColor } from '../../utils/randomColor.js';

export function Circle() {
  const circle = document.createElement("div"); // Erstelle das Kreis-Element
  circle.classList.add("circle");

  // Event-Listener für den Kreis
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();  // Zufällige Farbe setzen
  });

  return circle; // Gebe das Kreis-Element zurück
}

