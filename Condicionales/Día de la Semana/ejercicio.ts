/**
 * Desarrollá un programa que, teniendo un número aleatoreo entre 1 y 7
 * muestre por pantalla el día de la semana al que corresponde el número.
 * Tené en cuenta que el 1 es el Lunes y el 7 es el Domingo.
 */

const MAXIMO: number = 7;
const MINIMO: number = 1;
const NUMERO: number = Math.floor(Math.random() * (MINIMO - MAXIMO + MINIMO)) + MAXIMO;
const MENSAJE_DE_ERROR: string = "El número ingresado no es correcto.";

console.log("El número ingresado es", NUMERO);

if (NUMERO >= MINIMO && NUMERO <= MAXIMO) {
  let diaIngresado: string;

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
      console.log(MENSAJE_DE_ERROR);
      break;
    }
  }
  console.log("El día ingresado es", diaIngresado);
} else {
  console.log(MENSAJE_DE_ERROR);
}
