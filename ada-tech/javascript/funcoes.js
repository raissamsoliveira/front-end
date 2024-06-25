// Funções 

//Definição da função
function saudacao() {
    console.log('Olá! Seja bem vindo(a) ao curso de JS!')
}

saudacao()

//Como enviar parâmetros para as funções
function saudacao(nome, curso = 'JavaScript') {
    console.log(`Olá, ${nome}! Seja bem vindo(a) ao curso de ${curso}!`)
}

saudacao('Raissa', 'Engenharia de Software')
saudacao('João')

//Retorno da função 
function soma(nmr1, nmr2) {
    return nmr1 + nmr2
}

let resultado = soma (10,30)
console.log('Resultado: ', resultado)