let nota = 10;

if (nota >= 7) {
    console.log("Aluno aprovado");
} else if (nota >= 5) {
    console.log("Aluno em recuperação");
} else {
    console.log("Aluno reprovado");
}

let moeda = "Dólar";
switch (moeda) {
    case "Dólar":
        console.log("Você escolheu converter para Dólar.");
        break;
    case "Euro":
        console.log("Você escolheu converter para Euro.");
        break;
    case "Libra":
        console.log("Você escolheu converter para Libra.");
        break;
    default:
        console.log("Moeda inválida. Tente novamente.");
}

let num1 = 10;
let num2 = 7;
let num3 = 99;

if (num1 > num2 && num1 > num3) {
    console.log("O maior número é o 1");
} else if (num2 > num1 && num2 > num3) {
    console.log("O maior número é o 2");
} else {
    console.log("O maior número é o 3");
}

// outra opção
let maior;
if (num1 > num2 && num1 > num3) {
    maior = num1;
} else if (num2 > num1 && num2 > num3) {
    maior = num2;
} else {
    maior = num3;
}
console.log("O maior número é:", maior);

//outra opção
let menor;
if (num1 > num2 && num1 > num3) {
    maior = num1;
    if (num2 > num3) {
        menor = num3
    }
    else {
        menor = num2;
    }
} else if (num2 > num1 && num2 > num3) {
    maior = num2;
    if (num1 > num3) {
        menor = num3;
    } else {
        menor = num1;
    }
} else if (num3 > num1 && num3 > num2){
    maior = num3;
    if (num1 > num2) {
        menor = num2;
    } else {
        menor = num1;
    }
}
console.log("O maior número é:", maior);
console.log("O menor número é:", menor);

let numero = -7;
let valorNum;
if (numero < 0) {
    valorNum = "negativo";
} else if (numero === 0) {
    valorNum = "zero";
} else {
    valorNum = "positivo";
}
console.log(`O número ${numero} é ${valorNum}`);

let turno = "M";
switch (turno) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break;
    default:
        console.log("Valor inválido!");
}