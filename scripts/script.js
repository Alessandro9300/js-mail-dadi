// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e   stampa un messaggio appropriato;

// creo la mia lista di mails

 var myArray = ["uno-mail", "due-mail","tre-mail","quattro-mail","ambarabaciccicoccò"];

// creo una variabile per far inserire all'utente la sua mail

var userMail = prompt("Inserire mail");

// creo messaggi output

var accessoConsentito = "Benvenuto utente"
var accessoNegato = "E-mail inserita errata"

// creo condizione

if (userMail === myArray[0] || userMail === myArray[1] || userMail === myArray[2] || userMail === myArray[3] || userMail === myArray[4]) {
  document.getElementById('output').innerHTML = accessoConsentito;
} else {
  document.getElementById('output').innerHTML = accessoNegato;

//
// for (var i = 0; i < myArray.length; i++) {
//
//
// }


console.log(myArray[i]);

}




console.log(myArray);
