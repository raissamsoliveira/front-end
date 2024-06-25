// Laço Numérico: FOR

// O problema
const input = require('readline-sync');

const nota1 = Number(input.question('Informe a nota 1: '));
const nota2 = Number(input.question('Informe a nota 2: '));
const nota3 = Number(input.question('Informe a nota 3: '));

let media = (nota1 + nota2 + nota3)/3

// Acumulador

let acumulador = 0;

acumulador = acumulador + 10  //acumulador += 10  ->soma 10 com a própria variável
acumulador += 2
acumulador ++  //incrementa uma unidade de joga dentro da variável

console.log(acumulador)

// Estrutura FOR

for (let i = 0; i < 10; i++) {
    console.log('Repetição', i)
}


// Resolvendo o problema inicial

let nota;
let soma = 0;
let mediageral;

for (let i = 0; i<3; i++) {
    nota = Number(input.question(`Informe a nota %{i} do aluno: `))
    soma = soma + nota
    mediageral = soma/3
}

console.log (`A média do aluno é ${media} .`)