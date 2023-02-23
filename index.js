// Variables

let homePointsCount = 0;
let guestPointsCount = 0;
let homePointsEl = document.getElementById("points-home-el")
let guestPointsEl = document.getElementById("points-guest-el")

// Fonctions

function homeAdd1Point() {
    homePointsCount += 1
    homePointsEl.textContent = homePointsCount
}

function homeAdd2Points() {
    homePointsCount += 2
    homePointsEl.textContent = homePointsCount
}

function homeAdd3Points() {
    homePointsCount += 3
    homePointsEl.textContent = homePointsCount
}

function guestAdd1Point() {
    guestPointsCount += 1
    guestPointsEl.textContent = guestPointsCount
}

function guestAdd2Points() {
    guestPointsCount += 2
    guestPointsEl.textContent = guestPointsCount
}

function guestAdd3Points() {
    guestPointsCount += 3
    guestPointsEl.textContent = guestPointsCount
}

function newGame() {
    homePointsCount = 0;
    guestPointsCount = 0;
    guestPointsEl.textContent = guestPointsCount;
    homePointsEl.textContent = homePointsCount;
}
