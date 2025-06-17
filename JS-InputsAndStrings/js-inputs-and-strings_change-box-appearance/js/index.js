console.clear();

const box = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector ('[data-js="input-color"]');
const inputRaduis = document.querySelector ('[data-js="input-radius"]');
const inputRotation = document.querySelector ('[data-js="input-rotation"]');

console.log(
    {
        box,
        inputColor,
        inputRaduis,
        inputRotation,
    }
)


inputColor.addEventListener("input", () => {
    const hue = inputColor.value;
  box.style.backgroundColor =  `hsl(${hue}deg, 70%, 60%)`;
});

inputRaduis.addEventListener("input", () => {
    console.log("works");
    const radius = inputRaduis.value;
    console.log ({radius});
    box.style.borderRadius = `${radius}%`;})

    inputRotation.addEventListener("input", () => {
        // console.log("works");
        const rotation = inputRotation.value;
        // console.log({rotation});
        box.style.transform = `rotate(${rotation}deg)`;
    });