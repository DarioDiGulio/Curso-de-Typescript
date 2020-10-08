/**
 * Existen dos reglas que identifican dos conjuntos de valores:
 * 1. El número es de un solo dígito.
 * 2. El número es impar.
 * A partir de estas reglas, creá un algoritmo que asigne a las variables booleanas estaEnA ,
 * estaEnB , estaEnAmbos y noEstaEnNinguno el valor verdadero o falso, según
 * corresponda, para indicar si el valor ingresado pertenece al primer conjunto, al segundo, a
 * ambos o a ninguno, respectivamente.
*/
var num1 = 546;
var num2 = -231;
var num3 = -84;
var num4 = 1;
var num5 = -9;
var num6 = 75;
var num7 = 7;
var num8 = 76;
var num9 = 6;
var num10 = 4;
var estaEnA = num1 < 10 && num1 > -9;
var estaEnB = num1 % 2 != 0;
if (estaEnA && estaEnB) {
    console.log('El número ' + num1 + ' está en ambos conjuntos.');
}
if (estaEnA) {
    console.log('El número ' + num1 + '  está en el conjunto A.');
}
if (estaEnB) {
    console.log('El número ' + num1 + '  está en el conjunto B.');
}
else {
    console.log('El número ' + num1 + ' no está en ningún conjunto.');
}
