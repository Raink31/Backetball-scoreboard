// Variables

let homePointsCount = 0;
let guestPointsCount = 0;
let homePointsEl = document.getElementById("points-home-el")
let guestPointsEl = document.getElementById("points-guest-el")

// Fonctions

function highlight() {
    if (homePointsCount > guestPointsCount) {
    homePointsEl.style.textShadow = " 0 0 20px #fd1745";
    guestPointsEl.style.textShadow = "none";
    } else if (homePointsCount < guestPointsCount) {
        guestPointsEl.style.textShadow = " 0 0 20px #fd1745";
        homePointsEl.style.textShadow = "none";
    } else {
        homePointsEl.style.textShadow = "none";
        guestPointsEl.style.textShadow = "none";
    }
}


function homeAddPoint(a) {
    homePointsCount += a
    homePointsEl.textContent = homePointsCount
    highlight()
}

function guestAddPoint(a) {
    guestPointsCount += a
    guestPointsEl.textContent = guestPointsCount
    highlight()
}

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000)


function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60))
}

function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString
    }
}

function newGame() {
    homePointsCount = 0;
    guestPointsCount = 0;
    guestPointsEl.textContent = guestPointsCount;
    homePointsEl.textContent = homePointsCount;
    homePointsEl.style.textShadow = "none";
    guestPointsEl.style.textShadow = "none";
    totalSeconds = 0
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}