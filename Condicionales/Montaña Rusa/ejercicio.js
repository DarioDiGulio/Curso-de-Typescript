/**
 * Para entrar a la montaña rusa "Infierno en las alturas" nos piden tener al menos 7 años y
 * medir más de 1,40m. Definí la operación necesaria y probala con los siguientes datos:
 * Juan 5 años 1.45 m
 * Pedro 7 años 1.23 m
 * Luis 8 años 1.51 m
 * Ana 8 años 1.39 m
 * Elaborá el programa que nos permita saber cuál de estos chicos puede acceder al juego.
*/
const EDAD_JUAN = 5;
const ALTURA_JUAN = 1.45;
const EDAD_PEDRO = 7;
const ALTURA_PEDRO = 1.23;
const EDAD_LUIS = 8;
const ALTURA_LUIS = 1.51;
const EDAD_ANA = 8;
const ALTURA_ANA = 1.39;
const EDAD_MINIMA = 7;
const ALTURA_MINIMA = 1.40;
if (EDAD_JUAN >= EDAD_MINIMA && ALTURA_JUAN >= ALTURA_MINIMA) {
    console.log('Juan puede acceder al juego.');
}
else {
    console.log('Juan no puede acceder al juego.');
}
if (EDAD_PEDRO >= EDAD_MINIMA && ALTURA_PEDRO >= ALTURA_MINIMA) {
    console.log('Pedro puede acceder al juego.');
}
else {
    console.log('Pedro no puede acceder al juego.');
}
if (EDAD_LUIS >= EDAD_MINIMA && ALTURA_LUIS >= ALTURA_MINIMA) {
    console.log('Luis puede acceder al juego.');
}
else {
    console.log('Luis no puede acceder al juego.');
}
if (EDAD_ANA >= EDAD_MINIMA && ALTURA_ANA >= ALTURA_MINIMA) {
    console.log('Ana puede acceder al juego.');
}
else {
    console.log('Ana no puede acceder al juego.');
}
//# sourceMappingURL=ejercicio.js.map