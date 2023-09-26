// console.log('Funguju');
// //---------------HODINA---------------------------
// const osobniUdaje = {
//   jmeno: 'Eva',
//   prijmeni: 'Malá',
//   telefon: null,
//   email: null,
// };
// osobniUdaje.email = 'eva@mail.cz'; // nesmyslně zadaný údaj po zadání null

// document.body.innerHTML += `
// Jméno ${osobniUdaje.jmeno} ${osobniUdaje.prijmeni}<br>`;
// document.body.innerHTML += `
// Kontakty ${osobniUdaje.telefon}, ${osobniUdaje.mail}<br>`; //překlep ve slove email = undefined

// if (null === undefined) {
//   document.body.innerHTML += 'null je undefined<br>';
// } else {
//   document.body.innerHTML += 'null není undefined<br>';
// }

// if (osobniUdaje.telefon === null) {
//   document.body.innerHTML += '<em>E-mail nebyl zadán</em><br>';
// } else {
//   document.body.innerHTML += `E-mail ${osobniUdaje.email}<br>`;
// }

// if (osobniUdaje.email !== null) {
//   document.body.innerHTML += `E-mail ${osobniUdaje.email}<br>`;
// } else {
//   document.body.innerHTML += '<em>E-mail nebyl zadán</em><br>';
// }

// if ('null' !== null) {
//   document.body.innerHTML += '<em>Řetězec není hodnota null</em><br>';
// }

// if ('' !== null) {
//   document.body.innerHTML += '<em>Prázdný řetězec nneí hodnota null</em><br>';
// }

// if (0 !== null) {
//   document.body.innerHTML += '<em>Nula není hodnota null</em><br>';
// }

//------------------------------------------------
// PŘEVOD MĚNY
// Napište funkci, která převede částku na české koruny.
// Napište funkci convertToCZK, která převede částku zadanou v cízí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

// Měna	Kód	Kurz
// Euro	EUR	24.47
// Britská libra	GBP	28.09
// Americký dolar	USD	24.81
// Bitcoin	BTC	478637
// Výslednou částku zakrouhlete na celé koruny. Příklad použití:

// document.body.innerHTML += convertToCZK(25, 'EUR');
// Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek null. Otestujte funkci výpisem výsledku do stránky.
// const convertToCZK = (amount, code) => {
//   let rate;
//   if (code === 'EUR') {
//     rate = 24.47;
//   } else if (code === 'GBP') {
//     rate = 28.09;
//   } else if (code === 'USD') {
//     rate = 24.81;
//   } else if (code === 'BTC') {
//     rate = 478637;
//   } else {
//     return null;
//   }
//   return Math.round(amount * rate);
// };
// document.body.innerHTML += `<p>25 EUR je ${convertToCZK(25, 'EUR')} CZK</p>`;
// document.body.innerHTML += `<p>25 GBP je ${convertToCZK(25, 'GBP')} CZK</p>`;
// document.body.innerHTML += `<p>25 USD je ${convertToCZK(25, 'USD')} CZK</p>`;
// document.body.innerHTML += `<p>25 BTC je ${convertToCZK(25, 'BTC')} CZK</p>`;
// document.body.innerHTML += `<p>25 AOA je ${convertToCZK(25, 'AOA')} CZK</p>`; //Africká měna :D
------------------------------------------------------------
// PRICE BY MUSELO BÝT DEFINOVÁNO PŘED PODMÍNKOU A BÝT LET
// const age = 25;

// if (age > 21) {
//   const price = 100;
// } else if (age > 15) {
//   const price = 50;
// } else {
//   const price = 0;
// }

// document.body.innerHTML += `<p>${price}</p>`;
//--------------------------------------------------
// NEZOBRAZÍ SE NIC PROTOŽE NAME PEPA UŽ BYLO DEFINOVÁNO
// const name = 'Franta';

// const greet = (name) => {
//   const name = 'Pepa';
//   document.body.innerHTML += `<p>${name}</p>`;
// };

// greet('Jožin');
//---------------------------------------------
//GLOBÁLNÍ P SE NEZOBRAZÍ PROTOŽE NENÍ DEFINOVÁNA UVNITŘ FCE
// const message = 'Vítej ve světě slasti';

// const checkAge = (age, message) => {
//   // Z hlediska oboru platnosti jsou „age“ a „message“ jakoby definovány až zde, uvnitř bloku funkce
//   if (age < 18) {
//     return message;
//   } else {
//     const message = 'Vítej mezi dospěláky';
//     return message;
//   }
// };
// document.body.innerHTML += checkAge(15, 'Utři si sopel') + '<br>';
// document.body.innerHTML += checkAge(21, 'Oh yeah!') + '<br>';
