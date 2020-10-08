/**
 * A partir de un valor ingresado (el cual deberá estar comprendido entre 2 y 9, inclusive),
 * generá y mostrá todos sus múltiplos menores o iguales a 100, primero en forma ascendente
 * y luego en orden inverso, dentro del mismo programa.
 */
var NUMERO = Math.floor(Math.random() * (1 - 12 + 1)) + 12;
var CORTE = 100;
var index = 0;
while (index <= CORTE) {
    if (index % NUMERO === 0) {
        console.log(index + ' es múltiplo de ' + NUMERO);
    }
    index++;
}
