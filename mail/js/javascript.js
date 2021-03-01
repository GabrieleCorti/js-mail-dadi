//chiedo ad utente mail
var mailutente = prompt("quale è la tua mail?");
//le mail che ho nel server
var listamail = ["shdssba@gmail.com", "bfhdwbfwdb@gmail.com", "fjsfh@gmail.com", "utentemail.gmail.com"];
var signal;
//ciclo nell'array
for (var i = 0; i < listamail.length; i++) {
  if (listamail[i] == mailutente) {
    signal = 1;
  }
}
//faccio passare
if ( signal == 1 ) {
  document.getElementById("responso").innerHTML = "Sei nella Lista, Brodi";
} else {
  document.getElementById("responso").innerHTML = "Sei un Perdente non puoi entrere qui LMAO";
}
