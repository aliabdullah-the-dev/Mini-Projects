let myLeads = [];


// Get the elements
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");


// Load leads from local storage
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
handleLocalStorage(leadsFromLocalStorage);


// Add event listeners
tabBtn.addEventListener("click", () => {pushTab()});
deleteBtn.addEventListener("dblclick", () => {clearLeads()});
inputBtn.addEventListener("click", () => {pushLeads()});


// Define the functions
function handleLocalStorage(leadsFromLS){
    if (leadsFromLS) {
        myLeads = leadsFromLS;
        render(myLeads);
    }
}

function pushTab() {
    if (typeof chrome !== 'undefined' && chrome.tabs) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            myLeads.push(tabs[0].url);
            localStorage.setItem("myLeads", JSON.stringify(myLeads) );
            render(myLeads);
        })
    } else {
        console.error('Chrome extension context not available');
    }
}

function pushLeads(){
    if (inputEl.value) {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        render(myLeads);
        console.log(myLeads);
    }  
}

function clearLeads() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
