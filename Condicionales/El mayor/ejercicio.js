/**
 *  Desarrollá un programa que, teniendo dos números aleatoreos
 *  muestre por pantalla el mayor de los dos.
 *  Tené en cuenta que podrían ser iguales, en ese caso mostrá
 *  un mensaje que diga que son iguales.
*/
const random1 = Math.random();
const random2 = Math.random();
if (random1 > random2) {
    console.log('El mayor es ' + random1);
}
else if (random1 == random2) {
    console.log('Los números son iguales');
}
else {
    console.log('El mayor es ' + random2);
}
//# sourceMappingURL=ejercicio.js.map