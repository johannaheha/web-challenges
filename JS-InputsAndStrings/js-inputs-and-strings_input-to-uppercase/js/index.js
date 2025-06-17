console.clear();

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', function(){
    input.value = input.value.toUpperCase();
})