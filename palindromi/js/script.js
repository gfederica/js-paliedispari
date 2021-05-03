// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// input per inserire il nome
var nome = prompt("Inserisci un nome");

// faccio lo split per separare le lettere del nome
nomeSplit = nome.split("");
console.log(nomeSplit);

// // faccio il reverse per scrivere il nome al contrario e aggiungo la funzione join("") per riportare contenuto a una stringa
var nomeReverse = nomeSplit.reverse().join("");
// stampo nome al contrario e nome normale per fare una verifica
console.log(nomeReverse);
console.log(nome);


// creo una funzione che metta a confronto le due varianti del nome
function palindromoTrue (nome0, nomeReverse0) {
    if (nome == nomeReverse) {
        return "Il nome è palindromo!";
    } else {
        return "Il nome non è palindromo!"
    }
}

// invoco la funzione coi miei parametri
var nome = palindromoTrue(nome, nomeReverse);
console.log(nome);