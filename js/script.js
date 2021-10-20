const firstname = prompt('Come ti chiami?');
const surname = prompt('qual è il tuo cognome?');
const favColor = prompt('Qual è il tuo colore preferito?');

const userPassword = firstname + surname + favColor + 21

console.log(firstname);
console.log(surname);
console.log(favColor);

document.getElementById('userPassword').innerHTML = "Password generata: " + userPassword;