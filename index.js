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
//   if (code === 'EUR') {
//     return Math.round(amount * 24.47);
//   }
//   if (code === 'GBP') {
//     return Math.round(amount * 28.09);
//   }
//   if (code === 'USD') {
//     return Math.round(amount * 24.81);
//   }
//   if (code === 'BTC') {
//     return Math.round(amount * 478637);
//   }
//   return null;
// };
// document.body.innerHTML += convertToCZK(25, 'EUR');
// document.body.innerHTML += '<br></br>';
// document.body.innerHTML += convertToCZK(10, 'GBP');
// document.body.innerHTML += '<br></br>';
// document.body.innerHTML += convertToCZK(20, 'USD');
// document.body.innerHTML += '<br></br>';
// document.body.innerHTML += convertToCZK(1, 'BTC');
// document.body.innerHTML += '<br></br>';
// document.body.innerHTML += convertToCZK(25, 'AOA'); //Africká měna :D
//------------------------------------------------------------
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
