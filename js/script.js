const firstname = prompt('Come ti chiami?');
const surname = prompt('qual è il tuo cognome?');
const favColor = prompt('Qual è il tuo colore preferito?');

const userPassword = firstname + surname + favColor + 21

const passwordLenght = userPassword.length;

console.log(firstname);
console.log(surname);
console.log(favColor);

document.getElementById('titleUserPassword').innerHTML = 

`
<h2>Password generata: </h2>

`
document.getElementById('userPassword').innerHTML = 

`
<h1> ${userPassword} </h1>

`
document.getElementById('passwordLenght').innerHTML = 

`
<p>Lunghezza password: </p>
<h3>${passwordLenght} caratteri </h3>

`

