export function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)} 80% 55%)`;
}
console.log (getRandomColor)