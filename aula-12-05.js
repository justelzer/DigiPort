//exercício 1

let alunas = [
    {nome: "Júlia", sabor: "Chocolate"},
    {nome: "Vicky", sabor: "Morango"},
    {nome: "Gisele", sabor: "Pistache"},
]

for (let i=0; i < alunas.length; i++) {
    console.log(`Nome: ${alunas[i].nome} | Sabor: ${alunas[i].sabor}`);
}

//exercicio 1 - modelo 2
for (let aluna of alunas) {
    console.log(`Modelo 2 | Nome: ${aluna.nome} | Sabor: ${aluna.sabor}`);
}

// exercicio 2

let donut = new Array(11);

for (let i=1; i < donut.length; i++) {
    if (i % 3 === 0) {
        donut[i] = "Chocolate"
    } else {
        donut[i] = "Baunilha"
    }
    console.log(`Donut número: ${i} | Recheio: ${donut[i]}`);
}

// exercicio 3

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
rl.question('Digite seu nome: ', (nome) => {
  console.log(`Olá, ${nome}`);
  rl.close();
});
*/

let lanchoneteVirtal;

rl.question('Escolha a opção desejada: 1 - Ver cardápio | 2 - Fazer um pedido | 3 - Falar com atendente | 4 - Sair ', (lanchoneteVirtual) => {
  rl.close();
});

while (lanchoneteVirtal < 4) {
    switch (lanchoneteVirtual) {
        case 1: 
            console.log("Vendo cardápio...");
            break;
        case 2:
            console.log("Fazendo pedido...");
            break;
        case 3:
            console.log("Chamando atendente...");
            break;
    }
}
