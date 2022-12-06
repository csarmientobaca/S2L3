/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 50
let num2 = 33

if (num1 > num2) {
  console.log("il numero maggiore è: ", num1)
}
else {
  console.log("il numero maggiore è: ", num2)

}

console.log("---------------")


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 14
if (num3 !== 5) {
  console.log("not equal")
}
console.log("---------------")


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let div5 = 15
if ((div5 % 5) === 0) {
  console.log("il numero:", div5, "è divisibile per 5")


}
console.log("---------------")

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
// || si usa OR


/* SCRIVI QUI LA TUA RISPOSTA */


let intero1 = 20
let intero2 = 12
if (((intero1 || intero2) === 8) || ((intero1 + intero2) === 8) || ((intero1 - intero2) === 8)) {
  console.log("è uguale a 8")
}

console.log("---------------")


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 50
let daPagare = 10

if (totalShoppingCart >= 50) {
  daPagare = totalShoppingCart
  console.log("Spedizione gratuita!! Totale da pagare:", daPagare)
}
else {
  daPagare += totalShoppingCart
  console.log("Totale da pagare:", daPagare)
}

console.log("---------------")
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/




/* SCRIVI QUI LA TUA RISPOSTA */

let sconto

if (totalShoppingCart >= 50) {
  sconto = totalShoppingCart * 0.2
  daPagare = totalShoppingCart - sconto
  console.log("Oggi è il black friday e ti abbiamo scontato:", sconto)
  console.log("Spedizione gratuita!! Totale da pagare:", daPagare)
}
else {
  sconto = totalShoppingCart * 0.2
  daPagare = totalShoppingCart - sconto
  console.log("Oggi è il black friday e ti abbiamo scontato:", sconto)
  daPagare += totalShoppingCart
  console.log("Totale da pagare:", daPagare)
}

console.log("---------------")



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore1 = 33
let valore2 = 2
let valore3 = 11

let big
let mid
let low

if (big === undefined) {
  if (valore1 > valore2 && valore1 > valore3) {
    big = valore1
    console.log("im working", big)
  }
  else if (valore2 > valore1 && valore2 > valore3) {
    big = valore2

  }
  else {
    big = valore3
  }
}

if (mid === undefined) {
  if (big !== valore1) {
    valore1 = big - valore1



  }
}


//   // laterLATERlater
console.log("---------------")


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let string = 1222
if (typeof (string) === "string") {
  console.log(string, "its not a number")

}
else {
  console.log(string, "its a number")

}

console.log("---------------")


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let pariOrNot = 11
if ((pariOrNot % 2) === 0) {
  console.log("il numero è pari")
}
else {
  console.log("il numero è dispari")
}


console.log("---------------")

// ESERCIZIO 10

//   Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.


let val = 1
if (val < 10 && val >= 5) {//added "&& val >=5"
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* SCRIVI QUI LA TUA RISPOSTA */


console.log("---------------")



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}



/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto"

console.log(me)



console.log("---------------")

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


delete me.lastName
console.log(me)
console.log("---------------")


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills[2]
console.log(me)
console.log("---------------")


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let hi = []
hi[0] = 1
hi[1] = 2
hi[2] = 3
hi[3] = 4
hi[4] = 5
hi[5] = 6
hi[6] = 7
hi[7] = 8
hi[8] = 9
hi[9] = 10

console.log(hi)

console.log("---------------")



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


hi[9] = 100
console.log(hi)