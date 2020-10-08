/**
 * Elaborá un programa que, teniendo dos números aleatoreos
 * muestre por pantalla si el resultado de multiplicarlos entre sí
 * es un número par o impar.
 */


const random1: number = Math.floor(Math.random() * (0 - 100 + 1)) + 100;
const random2: number = Math.floor(Math.random() * (0 - 100 + 1)) + 100;
let multiplicacion: number;

multiplicacion = random1 * random2;

console.log('El resultado es ' + multiplicacion);

if (multiplicacion % 2 == 0) {
    console.log('El resultado es par.');
} else {
    console.log('El resultado es impar.');
}

