// ACQUISIZIONE DATI

const travelDistance = parseInt(prompt("Ciao Utente! Definiscimi la distanza in km del viaggio che desideri effettuare"));
console.log(travelDistance)

const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge)

const ticketPrice = travelDistance * 0.21;
console.log(ticketPrice)

let finalPrice = ticketPrice.toFixed(2)

// LOGICA DEL PROGRAMMA

let discountPrice = ""

if (userAge >= 65) {
    discountPrice = (finalPrice - ((finalPrice / 100) * 40)).toFixed(2)
    console.log("Il prezzo del biglietto è di € " + discountPrice)
} else if (userAge < 18) {
    discountPrice = (finalPrice - ((finalPrice / 100) * 20)).toFixed(2)
    console.log("Il prezzo del biglietto è di € " + discountPrice)
} else {
    discountPrice = finalPrice
    console.log("Il prezzo del biglietto è di € " + discountPrice)
}

const message = `Il prezzo del biglietto è di € ${discountPrice}`

// OUTPUT

document.getElementById("result").innerHTML = message