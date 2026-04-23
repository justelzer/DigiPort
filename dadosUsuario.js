let nome = "Julia";
const anoNascimento = 1999;
let anoFuturo = 2034;
idadeFutura = anoFuturo - anoNascimento;

console.log(`A idade de ${nome} em ${anoFuturo} vai ser ${idadeFutura} anos`);

primeiroCaractere = nome[0];
let tamanho = nome.length;
ultimoCaractere = nome[nome.length - 1];

console.log(`Primeiro caracter é ${primeiroCaractere}, segundo caracter é ${nome.charAt(1)}, o comprimento é ${tamanho} e o último caracter é ${ultimoCaractere}`);

nome = nome.replace("Julia", "Cookie");
console.log(nome);
nome = nome.concat(" Stelzer");
console.log(nome);
console.log(nome.slice(0,3));


