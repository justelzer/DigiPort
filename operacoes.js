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