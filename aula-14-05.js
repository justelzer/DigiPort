/* Using the library prompt-sync

// Installing
npm install prompt-sync

// Import and initialize the prompt function
const prompt = require('prompt-sync')();

// Capture user input
const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);

// Capture numerical input (always returns a string, so convert it)
const ageInput = prompt('How old are you? ');
const age = parseInt(ageInput);
console.log(`Next year, you will be ${age + 1}.`);
*/

// exercicio 1

const prompt = require('prompt-sync')();

let escolha = 0;

while (escolha !== 4) {
    console.log('-----MENU DA LANCHONETE DA JÚLIA-----')
    console.log('1 - Ver cardápio')
    console.log('2 - Fazer um pedido')
    console.log('3 - Falar com atendente')
    console.log('4 - Sair')
    escolha = parseInt(prompt('Escolha a opção desejada: ')); //preciso de parseInt pois o default é string
    switch (escolha) {
        case 1:
            console.log("Vendo cardápio...");
            break;
        case 2:
            console.log("Fazendo pedido...");
            break;
        case 3:
            console.log("Chamando atendente...");
            break;
        case 4:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}

// exercicio 2

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(`O número ${numeros[i]} é par!`);
    }
    else {
        console.log(`O número ${numeros[i]} é ímpar!`);
    }
}

// exercicio 2 - jeito 2
for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é par!`);
    }
    else {
        console.log(`O número ${numero} é ímpar!`);
    }
}

// exercicio 3
for (let dia = 1; dia <= 7; dia++) {
    qtdMacas = prompt(`Quantas maçãs João colheu no dia ${dia}? `);
    console.log(`No dia ${dia}, João colheu ${qtdMacas} maçãs.`)
}

// exercicio 4
let positivos = 0;
let negativos = 0;
let zeros = 0;
for (let i = 1; i <= 10; i++) {
    avaliarNum = prompt('Digite um número para saber se é negativo, positivo ou zero: ');
    if (avaliarNum == 0) {
        console.log(`O número ${avaliarNum} é zero`);
        zeros++;
    } else if (avaliarNum > 0) {
        console.log(`O número ${avaliarNum} é positivo`);
        positivos++;
    } else {
        console.log(`O número ${avaliarNum} é negativo`);
        negativos++;
    }
}

console.log(`Quantidade de números positivos: ${positivos}`);
console.log(`Quantidade de números negativos: ${negativos}`);
console.log(`Quantidade de números zero: ${zeros}`);