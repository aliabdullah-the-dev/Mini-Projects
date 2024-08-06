// Get the elements
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const saveBtn = document.getElementById('save-btn');
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const totalEl = document.getElementById("total-el");
const headingEl = document.getElementById('heading-el');
const pageContent = document.getElementsByClassName('container')[0];

// Constants
const DEFAULT_HEADING = "Count Master";
const PROMPT_MESSAGE = "What do you want to count?";

// Initialize count variable
let count = 0;

// Add event listeners
document.addEventListener("DOMContentLoaded", initCounter);
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
saveBtn.addEventListener('click', handleSave);

// Define the functions
function capitalize(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

function initCounter() {
    const str = prompt(PROMPT_MESSAGE);
    if (str) {
        headingEl.innerText = capitalize(str) + " Counter";
    } else {
        headingEl.innerText = DEFAULT_HEADING;
    }
    pageContent.style.display = "block";
}

function increment() {
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    count -= 1;
    countEl.textContent = count;
}

function resetCount() {
    countEl.innerText = 0;
    count = 0;
}

function total() {
    let exp = saveEl.innerText.slice(17);
    result = eval(exp);
    totalEl.innerText = "Total: " + result;
}

function handleSave(){
    if (count < 0) {
        count = "(" + count + ")";
        save();
    }
    else {
        save();
    }
}

function save() {
    if (saveEl.innerText.endsWith(":")) {
        const countStr = " " + count;
        saveEl.innerText += countStr;
    } else {
        const countStr = " + " + count;
        saveEl.innerText += countStr;
    }
    resetCount();
    total();
}

// Initialize page content
pageContent.style.display = "none";