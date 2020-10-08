/**
 * Elaborá un programa que, teniendo dos números aleatoreos
 * muestre por pantalla si el resultado de multiplicarlos entre sí
 * es un número par o impar.
 */
const random1 = Math.floor(Math.random() * (0 - 100 + 1)) + 100;
const random2 = Math.floor(Math.random() * (0 - 100 + 1)) + 100;
let multiplicacion;
multiplicacion = random1 * random2;
console.log('El resultado es ' + multiplicacion);
if (multiplicacion % 2 == 0) {
    console.log('El resultado es par.');
}
else {
    console.log('El resultado es impar.');
}
//# sourceMappingURL=ejercicio.js.map