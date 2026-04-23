let exercicio = "Javascript é incrível!";
let quintaLetra = exercicio[4];
console.log(`A quinta letra da string é ${quintaLetra}`);
console.log(`A quinta letra da string é ${exercicio.charAt(4)}`);

exercicio = exercicio.replace("incrível", "poderoso");
console.log(exercicio);
console.log(`O tamanho da string é ${exercicio.length}`);
console.log(exercicio.slice(0, 10));

exercicio = exercicio.concat(" Vamos aprender!");
console.log(exercicio);