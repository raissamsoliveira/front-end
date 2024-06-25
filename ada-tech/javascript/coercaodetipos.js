// Coreção (Conversão) de Tipos 

// Coerção Explícita (Manual)
const numero = 10

console.log(numero,typeof numero)

const numEmFormatoDeString = String(numero)
console.log (numEmFormatoDeString, typeof numEmFormatoDeString)

console.log (Number('12345'))
console.log (parseFloat('23.45'))
console.log (parseInt(23.45))
console.log (Boolean(0))

console.clear ();

// Coerção Implícita (Automática)

console.log(10+'1')  //converte tudo em texto, e concatena
console.log('10'- 1) //quando é uma subtração, o js entende que é número e realmente faz a operação
console.log(10 - 'asasas')

console.clear();


// Exemplos

let n = 1 + '1';
n = n - 1;

console.log(n);
console.log(2+3+4+"5");
console.log("5"+2+3+4);
console.log("10" -"4" -"3" - 2 + "5")


