/**
 * Desarrollá un programa que, teniendo un número aleatoreo entre 1 y 7
 * muestre por pantalla el día de la semana al que corresponde el número.
 * Tené en cuenta que el 1 es el Lunes y el 7 es el Domingo.
 */
// const numero: number = Math.floor(Math.random() * (1 - 7 + 1)) + 7;
// enum Semana { Lunes = 1, Martes = 2, Miercoles = 3, Jueves = 4, Viernes = 5, Sabado = 6, Domingo = 7 }
// console.log(`El número es ${numero}`);
// switch (numero) {
//     case Semana.Lunes:
//         console.log('El número corresponde al Lunes');
//         break;
//     case Semana.Martes:
//         console.log('El número corresponde al Martes');
//         break;
//     case Semana.Miercoles:
//         console.log('El número corresponde al Miércoles');
//         break;
//     case Semana.Jueves:
//         console.log('El número corresponde al Jueves');
//         break;
//     case Semana.Viernes:
//         console.log('El número corresponde al Viernes');
//         break;
//     case Semana.Sabado:
//         console.log('El número corresponde al Sábado');
//         break;
//     case Semana.Domingo:
//         console.log('El número corresponde al Domingo');
//         break;
//     default:
//         console.log('El número no corresponde a ningún día de la semana.')
//         break;
// }
/**
 * Desarrollá un programa que, teniendo un número aleatoreo entre 1 y 7
 * muestre por pantalla el día de la semana al que corresponde el número.
 * Tené en cuenta que el 1 es el Lunes y el 7 es el Domingo.
 */
var MAXIMO = 7;
var MINIMO = 1;
var NUMERO = Math.floor(Math.random() * (1 - 7 + 1)) + MAXIMO;
var MENSAJE_DE_ERROR = "El número ingresado no es correcto.";
console.log("El número ingresado es", NUMERO);
if (NUMERO >= MINIMO && NUMERO <= MAXIMO) {
    var diaIngresado = void 0;
    switch (NUMERO) {
        case 1: {
            diaIngresado = "lunes";
            break;
        }
        case 2: {
            diaIngresado = "martes";
            break;
        }
        case 3: {
            diaIngresado = "miércoles";
            break;
        }
        case 4: {
            diaIngresado = "jueves";
            break;
        }
        case 5: {
            diaIngresado = "viernes";
            break;
        }
        case 6: {
            diaIngresado = "sábado";
            break;
        }
        case 7: {
            diaIngresado = "domingo";
            break;
        }
        default: {
            console.log(MENSAJE_DE_ERROR, "SWITCH");
            break;
        }
    }
    console.log("El día ingresado es", diaIngresado);
}
else {
    console.log(MENSAJE_DE_ERROR);
}
