// Gioco dei dadi, chi fa di più vince.

// creo variabili per avere numeri random

var utenteRandom1 = Math.ceil(Math.random() * 6);
var utenteRandom2 = Math.floor(Math.random() * 6);

var pcRandom1 = Math.ceil(Math.random() * 6);
var pcRandom2 = Math.ceil(Math.random() * 6);


// trucco i dadi tanto per

if (utenteRandom2 === 0) {
  utenteRandom2 = 1;
}

if (pcRandom2 === 3){
  pcRandom2 = 6;
}


// faccio la somma dei dadi di pc e utente

var dadiUtente = utenteRandom1 + utenteRandom2;
var dadiPc = pcRandom1 + pcRandom2;

console.log(dadiUtente , dadiPc);


// dò output di default

document.getElementById('output-1').innerHTML = "Primo dado utente: " + utenteRandom1;
document.getElementById('output-2').innerHTML = "Secondo dado utente: " + utenteRandom2;

document.getElementById('output-3').innerHTML = "Primo computer utente: " + pcRandom1;
document.getElementById('output-4').innerHTML = "Secondo computer utente: " + pcRandom2;

if (dadiUtente > dadiPc) {
  document.getElementById('output-5').innerHTML = "Vince l'utente totalizzando " + dadiUtente + " punti.";
} else if (dadiUtente < dadiPc) {
  document.getElementById('output-5').innerHTML = "Vince il pc totalizzando " + dadiPc + " punti.";
} else {
  document.getElementById('output-5').innerHTML = "Avete fatto pari, premere F5 per riprovare.";
}
