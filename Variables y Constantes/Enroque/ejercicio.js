/**
 * Elabora un programa que contenta una variable a que inicialmente valga 'A' y
 * una variable b que inicialmente valga 'B'. Luego mostrá por pantalla sus valores iniciales.
 * Intercambiá sus respectivos valores de tal manera que a valga 'B' y b valga 'A'.
 * Finalmente mostrá sus valores por pantalla.
 */
var a = 'A';
var b = 'B';
var c = '';
console.log('Estado inicial');
console.log('La variable a es ' + a);
console.log('La variable b es ' + b);
console.log('Intercambiando...');
c = b;
b = a;
a = c;
console.log('La variable a es ' + a);
console.log('La variable b es ' + b);
