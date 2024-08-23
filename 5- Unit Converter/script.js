/*
1 meter = 3.2808399 feet
1 liters = 0.26417205236 gallons
1 kilograms = 2.20462262 pounds
*/


let val = 0;


// Get the elements
let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");


// Add event listeners
convertBtn.addEventListener("click", ()=>{render()});

// Define the functions
function metersToFeet() {
    let feet = (val*3.2808399).toFixed(3);
    console.log(feet);
    return feet;
}
function feetToMeters() {
    let meters = (val/3.2808399).toFixed(3);
    console.log(meters);
    return meters;
}

function litersToGallons(){
    let gallons = (val*0.26417205236).toFixed(3);
    console.log(gallons);
    return gallons;
}
function gallonsToLiters(){
    let liters = (val/0.26417205236).toFixed(3);
    console.log(liters);
    return liters;
}

function kilosToPounds() {
    let pounds = (val*2.20462262).toFixed(3);
    console.log(pounds);
    return pounds;
}
function poundsToKilos() {
    let kilos = (val/2.20462262).toFixed(3);
    console.log(kilos);
    return kilos;
}

function render() {
    val = parseFloat(inputEl.value);
    if (isNaN(val)) {
        setTimeout(() => {alert("Invalid input. Please enter a number.");}, 10);
        return;
    }

    lengthEl.textContent = `${val} meters = ${metersToFeet()} feet | ${val} feet = ${feetToMeters()} meters`;
    volumeEl.textContent = `${val} liters = ${litersToGallons()} gallons | ${val} gallons = ${gallonsToLiters()} liters`;
    massEl.textContent = `${val} kilos = ${kilosToPounds()} pounds | ${val} pounds = ${poundsToKilos()} kilos`;
}