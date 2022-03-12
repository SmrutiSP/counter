const subtract = document.querySelector('.subtract');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');
const display = document.querySelector('.count');

subtract.addEventListener('click',subtractFromResult);
reset.addEventListener('click',resetResult);
add.addEventListener('click',addToResult);

function subtractFromResult() {
    let res = display.textContent;
    display.textContent = +res-1;
}

function resetResult() {
    display.textContent = 0
}

function addToResult() {
    let res = display.textContent;
    display.textContent = +res+1;
}