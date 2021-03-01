//assegazione numeri a pc e utente
var min = 1;

var max = 6;

var nUtente = Math.floor(Math.random() * (max - min + 1) + min);

var nPc = Math.floor(Math.random() * (max - min + 1) + min);

document.getElementById('nUtente').innerHTML = nUtente;
document.getElementById('nPc').innerHTML = nPc;

if (nUtente > nPc ) {

  document.getElementById('risultato').innerHTML = "Hai vinto";

} else if (nUtente < nPc) {

  document.getElementById('risultato').innerHTML = "Hai perso";

} else {

  document.getElementById('risultato').innerHTML = "Tu e il PC avete pareggiato";

}
