// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    databaseURL : "https://lead-tracker-app-scrimba-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const refDB = ref(database, "leads");


// --------------------------------


// Get the elements
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");


// Add event listeners
deleteBtn.addEventListener("dblclick", () => {clearLeads()});
inputBtn.addEventListener("click", () => {pushLeads()});
onValue(refDB, (snap)=>getLeads(snap));


// Define the functions
function getLeads(snapshot) {
    if (snapshot.exists()) {
        const snapshotValues = snapshot.val();
        const leads = Object.values(snapshotValues);
        render(leads);
    } else {
        ulEl.innerHTML = ""; // Clear the leads if the node doesn't exist
    }
}

function pushLeads(){
    if (inputEl.value) {
        push(refDB, inputEl.value);
        inputEl.value = "";
    }  
}

function clearLeads() {
    remove(refDB);
    ulEl.innerHTML = "";
}

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

