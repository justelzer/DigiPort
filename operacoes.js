let a = 10;
let b = 8;

console.log(`A soma de A e B é: ${a+b}`);
console.log(`O resto da divisão de A por B é: ${a%b}`);

console.log(`A é menor do que B? ${a<b}`);

let idade = 26;
console.log(idade == 26); //true
console.log(idade > 18); //true
console.log(idade != 25); //true

console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(1 === 5); //false
console.log(5 === 5); //true
console.log("5" === "5"); //true

let temCarteira = true;
let estaLogado = true;

if (idade >= 18 && temCarteira) {
    console.log("Access permitido ao motorista");
}

if (idade < 18 || estaLogado) {
    console.log("Accesso negado");
}

if (!estaLogado) {
    console.log("Faça login para acessar");
}

//aula pratica
let salarioPorHora = 30;
let horasTrabalhadas = 160;
let salarioFinal = salarioPorHora * horasTrabalhadas;
console.log(salarioFinal);

let precoOriginal = 200;
let desconto = precoOriginal * 0.10;
let precoFinal = precoOriginal - desconto;
console.log(precoFinal.toFixed(2));

let idade2 = 17;
let maiorDeIdade = (idade2 >= 18);
console.log(`Julia é maior de idade: ${maiorDeIdade}`);

let quantidadeItens = 22;
let ehPar = quantidadeItens % 2 == 0;
console.log(ehPar);

let chuva = true;
let guardaChuva = false;
let irFesta = !chuva && guardaChuva; // ou let irFesta = chuva == false && guardaChuva == true;
console.log(`Larissa irá a festa: ${irFesta}`);