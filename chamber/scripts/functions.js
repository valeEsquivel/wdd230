let oLastModif = new Date(document.lastModified);

let sDia = oLastModif.getDate();
let sMes = (oLastModif.getMonth() + 1);
let sAnio = oLastModif.getFullYear();
let sHora = oLastModif.getHours();
let sMinutos = oLastModif.getMinutes();
let sSegundos = oLastModif.getSeconds();

if (sDia < 10) {
    sDia = "0" + sDia;
}
if (sMes < 10) {
    sMes = "0" + sMes;
}
if (sHora < 10) {
    sHora = "0" + sHora;
}
if (sMinutos < 10) {
    sMinutos = "0" + sMinutos;
}
if (sSegundos < 10) {
    sSegundos = "0" + sSegundos;
}

oLastModif = "Last Modification: " + sDia + "/" + sMes + "/" + sAnio + " " + sHora + ":" + sMinutos + ":" + sSegundos;

document.getElementById("lastModified").innerHTML = oLastModif;

let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;


// LOCAL STORAGE

// Using localStorage to store the latest visit date by the client, display one of three possible messages about the time between page visits in the sidebar content area.
// If this is the user's first visit, display "Welcome! Let us know if you have any questions.".
// If the amount of time between visits is less than a day, display "Back so soon! Awesome!".

// If the amount of time between visits is less than a week, display "Welcome back! We're glad you're still with us.".

let lastVisit = localStorage.getItem('lastVisit');
let today = new Date();
let thisVisit = today.getTime();
localStorage.setItem('lastVisit', thisVisit);
let days = 1000 * 60 * 60 * 24;
let daysSinceLastVisit = Math.round((thisVisit - lastVisit) / days);

if (lastVisit === null) {
    document.querySelector("#lastVisit").textContent = "Welcome! Let us know if you have any questions.";
} else if (daysSinceLastVisit < 1) {
    document.querySelector("#lastVisit").textContent = "Back so soon! Awesome!";
} else {
    document.querySelector("#lastVisit").textContent = "You last visited " + daysSinceLastVisit + " days ago.";
}













