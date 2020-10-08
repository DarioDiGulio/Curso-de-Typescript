/** 
 * Existen dos reglas que identifican dos conjuntos de valores:
 * 1. El número es de un solo dígito.
 * 2. El número es impar.
 * A partir de estas reglas, creá un algoritmo que asigne a las variables booleanas estaEnA ,
 * estaEnB , estaEnAmbos y noEstaEnNinguno el valor verdadero o falso, según
 * corresponda, para indicar si el valor ingresado pertenece al primer conjunto, al segundo, a
 * ambos o a ninguno, respectivamente.
*/

const num1: number = 546;
const num2: number = -231;
const num3: number = -84;
const num4: number = 1;
const num5: number = -9;
const num6: number = 75;
const num7: number = 7;
const num8: number = 76;
const num9: number = 6;
const num10: number = 4;

let estaEnA = num1 < 10 && num1 > -9;
let estaEnB = num1 % 2 != 0;

if (estaEnA && estaEnB) {
    console.log('El número ' + num1 + ' está en ambos conjuntos.');
} if (estaEnA) {
    console.log('El número ' + num1 + '  está en el conjunto A.');
} if (estaEnB) {
    console.log('El número ' + num1 + '  está en el conjunto B.');
}else {
    console.log('El número ' + num1 + ' no está en ningún conjunto.');
}