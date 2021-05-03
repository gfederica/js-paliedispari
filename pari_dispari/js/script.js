// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var vittoriaUtente = false;

// chiediamo all'utente di scegliere pari o dispari
var sceltaComando = prompt("Scegli pari o dispari");

// controlliamo che la scelta sia pari o dispari
if (sceltaComando != "dispari" && sceltaComando != "pari" && sceltaComando != "PARI" && sceltaComando != "DISPARI") {
    (prompt("Errore! Scegli pari o dispari"));
} 

// trasformo la scelta in lowercase
sceltaComando = sceltaComando.toLowerCase();
console.log(sceltaComando);

// chiedo all'utente un numero da 1 a 5
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
// controllo che il numero sia nel range corretto altrimenti lo richiedo
if (numeroUtente < 1 || numeroUtente > 5) {
    parseInt(prompt("Errore! Scegli un numero da 1 a 5"));
}
console.log(numeroUtente);

// dichiaro la funzione che mi genera un numero casuale
function generaNumeroCasuale (min, max) {
    var numeroCasuale0 = Math.floor((Math.random() * max - min + 1) + min);
    return numeroCasuale0;
}

// invoco la funzione per generare il numero scelto dal computer
var numeroCasuale = generaNumeroCasuale (1, 5);
console.log(numeroCasuale);

// genero la variabile per sommare i numeri delle due scelte, mi servirà per stabilire se pari o dispari
var sommaNumeri = numeroUtente + numeroCasuale;
console.log(sommaNumeri);

// stabilisco la funzione per stabilire se un numero è pari o dispari
function isEven (num) {

    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function isOdd (num) {

    if (num % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

// invoco la funzione con la somma che mi interessa
var checkEven = isEven(sommaNumeri);
var checkOdd = isOdd(sommaNumeri);

// se la somma è pari e l'utente ha scelto pari, stampo hai vinto;
// se la somma  è pari e l'utente ha scelto dispari, stampo hai perso;
// altrimenti stampo hai vinto (l'utente ha scelto dispari e la somma è dispari).

if ((checkOdd && sceltaComando == "dispari") || (checkEven && sceltaComando == "pari")) {
    alert("Hai vinto!");
} else {
    alert("Hai perso!");
}
