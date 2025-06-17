console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    const age = Number(data.age);
    const badness = Number(data.badness);
    const ageBadnessSum = age + badness;

    console.log(`The age-badness-sum of "${data.firstName}" is "${ageBadnessSum}"`);

//     event.target.removeEventListener();
//     event.target.elements.firstName.focus();

})

