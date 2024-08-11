// Get the elements
let homeScoreCon = document.getElementById("homeScrCon");
let homeScoreEl = document.getElementById("homeScr");
let homeBtn1 = document.getElementById("homeBtn-1");
let homeBtn2 = document.getElementById("homeBtn-2");
let homeBtn3 = document.getElementById("homeBtn-3");

let guestScoreCon = document.getElementById("guestScrCon");
let guestScoreEl = document.getElementById("guestScr");
let guestBtn1 = document.getElementById("guestBtn-1");
let guestBtn2 = document.getElementById("guestBtn-2");
let guestBtn3 = document.getElementById("guestBtn-3");

let resetBtn = document.getElementById("resetBtn");


// Add event listeners
homeBtn1.addEventListener("click", () => addScore(homeScoreEl, 1));
homeBtn2.addEventListener("click", () => addScore(homeScoreEl, 2));
homeBtn3.addEventListener("click", () => addScore(homeScoreEl, 3));
guestBtn1.addEventListener("click", () => addScore(guestScoreEl, 1));
guestBtn2.addEventListener("click", () => addScore(guestScoreEl, 2));
guestBtn3.addEventListener("click", () => addScore(guestScoreEl, 3));
resetBtn.addEventListener("click", resetScore);


// Initialize Score variables
let homeScore = 0;
let guestScore = 0;


// Define the functions
function addScore(scoreEl, score) {
    if (scoreEl == homeScoreEl){
        homeScore += score;
        scoreEl.textContent = homeScore;
    }else if (scoreEl == guestScoreEl){
        guestScore += score;
        scoreEl.textContent = guestScore;
    }

    if (homeScore > guestScore) {
        homeScoreCon.style.boxShadow = "#F94F6D 0px 0px 10px 10px";
        guestScoreCon.style.boxShadow = "#F94F6D 0px 0px 10px 0px";
    } else {
        guestScoreCon.style.boxShadow = "#F94F6D 0px 0px 10px 10px";
        homeScoreCon.style.boxShadow = "#F94F6D 0px 0px 10px 0px";
    }
}

function resetScore() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    homeScoreCon.style.boxShadow = "#F94F6D 0px 0px 10px 0px";
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
    guestScoreCon.style.boxShadow = "#F94F6D 0px 0px 10px 0px";
}