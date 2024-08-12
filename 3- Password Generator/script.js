const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let characters = [];
let length = 12;


// Get the elements
let btnEl = document.getElementById("btn-el");
let pass1El = document.getElementById("pass1-el");
let pass2El = document.getElementById("pass2-el");
let lengthEl = document.getElementById("length-el");
let lengthSpanEl = document.getElementById("length-span-el");
let numbersEl = document.getElementById("numbers-el");
let symbolsEl = document.getElementById("symbols-el");
let notificationEl = document.getElementById("notification-el");


// Add event listeners
lengthEl.addEventListener("input", () => setLength());
btnEl.addEventListener("click", () => renderPass(length));
pass1El.addEventListener("click", function(){copyText(this)});
pass2El.addEventListener("click", function(){copyText(this)});


// Define the functions
function randIndex(){
    let rand = Math.floor(Math.random()*characters.length);
    return rand;
}

function setLength() {
    length = lengthEl.value;
    lengthSpanEl.textContent = length;
}

function setCharacters(hasNum, hasSym) {
    if (hasNum && hasSym){
        characters = [...alphabets, ...numbers, ...symbols];
    } else if (hasNum){
        characters = [...alphabets, ...numbers];
    } else if (hasSym){
        characters = [...alphabets, ...symbols];
    } else {
        characters = alphabets;
    }
}

function genPass(len) {
    let hasNumbers = numbersEl.checked;
    let hasSymbols = symbolsEl.checked;
    setCharacters(hasNumbers, hasSymbols);
    
    let pass = "";
    for (let i = 0; i < len; i++) {
        let chr = characters[randIndex()];
        pass += chr;
    }
    return pass;
}

function renderPass(len) {
    let pass1 = genPass(len);
    let pass2 = genPass(len);
    pass1El.textContent = pass1;
    pass2El.textContent = pass2;
}

function copyText(el) {
    navigator.clipboard.writeText(el.textContent);
    notificationEl.style.transform = "translate(0px, 0)";
    setTimeout(() => {
        notificationEl.style.transform = "translate(270px, 0)";
    }, 2000);
}