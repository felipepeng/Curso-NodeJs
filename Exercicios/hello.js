// Importando a função somar do 06-funcoes.js
const {somar, substract} = require("./06-funcoes");

let hello = "Hello, World! How it is going Peng?";
console.log(hello);

hello = hello.replace("Peng", "Penguinini");
console.log(hello);



console.log(somar([100, 14]))
console.log(substract([114, 14]))