// exercicio 1
let saldo = 18000;

if (saldo >= 15000) {
    console.log("Partiu Disney");
} else if (saldo >= 5000) {
    console.log("Bora pra Minas Gerais");
} else {
    console.log("Sem férias esse ano");
}

//exercicio 2
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

//exercicio 3
saldo = 9999,99;
let compra;
if (saldo < 3000) {
    compra = "Carlos vai economizar";
} else if (saldo < 10000) {
    compra = "Carlos vai comprar um smartphone";
} else {
    compra = "Carlos vai comprar um novo computador";
}

console.log(compra);

//exercicio 4
let tempo = 5;
if (tempo < 1) {
    console.log("Recebe medalha de ouro");
} else if (tempo < 2) {
    console.log("Recebe medalha de prata");
} else {
    console.log("Recebe medalha de bronze");
}

//exercicio 5
let dia = 5;
switch (dia) {
    case 1: 
        console.log("Domingo");
        break;
    case 2: 
        console.log("Segunda-feira");
        break;
    case 3: 
        console.log("Terça-feira");
        break;
    case 4: 
        console.log("Quarta-feira");
        break;
    case 5: 
        console.log("Quinta-feira");
        break;
    case 6: 
        console.log("Sexta-feira");
        break;
    case 7: 
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
}

//exercicio 6
nota = "A";
switch (nota) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bom");
        break;
    case "C":
        console.log("Regular");
        break;
    case "D":
        console.log("Ruim");
        break;
    case "F":
        console.log("Insuficiente");
        break;
    default:
        console.log("Nota inválida");
}

//exercicio 7
let idade = 26;
let identidade = false;

if (idade >= 18) {
    if (identidade) {
        console.log("Pode comprar bebida alcoólica");
    }
    else {
        console.log("Precisa da identidade para poder confirmar a idade");
    }
    } else {
        console.log("Não tem idade o suficiente, precisa ter 18 anos ou mais");
    }

if (idade >= 18 && identidade) {
        console.log("Pode comprar bebida alcoólica");
    } else if (idade >= 18 && !(identidade)) {
        console.log("Precisa da identidade para poder confirmar a idade");
    } else {
        console.log("Não tem idade o suficiente, precisa ter 18 anos ou mais");
    }