// Arrays

// Como criar um Array?
let arr = ['Raissa',25, 1.73,true];

// Como acessar os elementos de um array
console.log('Primeiro elemento: ', arr(0))

// Como obter o tamanho do array
console.log(arr.length)

// Percorrendo arrays
for (let i = 0; i < arr.length ; i++) {
    console.log(arr[i])
}

// MÉTODOS DE ARRAYS

const arr1 = [30,12,45,34,29]
let arr2 = []

// Fatiamento: slice
console.log(arr1.slice(0, 2))

//Adicionando elementos: push | unshift

console.log('Antes de adicionar com push: ', arr2)
arr2.push(10,20)
arr2.push(40)  //sempre coloca os elementos inclusos no final do array
console.log('Depois de adicionar com push: ', arr2)

console.log('Antes de adicionar com unshift: ', arr2)
arr2.unshift(0)  //sempre coloca os elementos inclusos no início do array  
console.log('Depois de adicionar com unshift: ', arr2)

//  Removendo elementos: pop | shift

console.log('Antes de remover com o pop:', arr2)
arr2.pop()  //remove o último elemento
console.log('Depois de remover com o pop: ', arr2)

console.log('Antes de remover com o shift:', arr2)
arr2.shift()  //remove o primeiro elemento
console.log('Depois de remover com o shift: ', arr2)

// Concatenando arrays: concat
console.log('arr1:', arr1)
console.log('arr2: ', arr2)

arr1.concat(arr2)
console.log(arr1.concat(arr2))


// Buscando elementos: indexOf | lastIndexOf

arr3 =[1,2,3,3,4,5]
console.log('arr3: ', arr3)

let indiceDoElemento33 = arr3.indexOf (3)  //mostra a primeira posição do elemento
console.log(indiceDoElemento33)

arr3 =[1,2,3,3,4,5]
let indiceDoElemento3 = arr3.lastIndexOf (3)  //mostra a última posição do elemento
console.log(indiceDoElemento3)


// Descobrindo a existência de um elemento: includes

console.log(arr3)

console.log(arr3.includes(10))


//Invertendo arrays: reverse

console.log(arr3)
const arr3invertido = arr3.reverse()

console.log('arr3 invertido: ', arr3invertido)