// Estruturas condicionais

const idade = 20;

if (idade >= 18) {
    console.log('Você é maior de idade')
} else {
    console.log('Você é menor de idade')
}

// Se média >= 7, aprovado
// Se média <7 e média >= 5, recuperação
// Se média < 5 reprovado

console.clear () //Limpando as saídas anteriores

let media = 10;

if (media >=7) {
    console.log('Aprovado')
} else if (media <7 && media >=5) {
    console.log('Recuperação')
} else  {
    console.log('Reprovado')
}


// Estruturas de Repetição &  Laços Condicionais

const input = require ('readline-sync');

const numero_sorteado = 5;

let numero = Number(input.question('Qual numero você escolhe?'));

while (numero !== numero_sorteado) {
    console.log ("Você errou o numero. Tente novamente!")
    numero = Number(input.question('Qual numero você escolhe?'));
} 

console.log("Você acertou!")
