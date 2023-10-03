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


// VISITS COUNTER
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

visitsDisplay.textContent = numVisits;

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);