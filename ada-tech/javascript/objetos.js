// OBJETOS

// Como criar um objeto? 
let arr = ['Raissa', 1.72, 32, true]
let pessoa = {
    nome: 'Raissa',
    idade: 32,
}

console.log(pessoa)
console.log(pessoa.nome)

// Como adicionar um par chave-valor? 
pessoa.altura = 1.72
console.log(pessoa)

// Como remover um par chave-valor?
delete pessoa.altura
console.log(pessoa)

// Como percorrer?
for (let chave in pessoa) {
    console.log (chave)
}