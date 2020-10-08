/**
 * Crea un programa que, sabiendo que la velocidad de la luz en el vacío es de 299792458 km/s, 
 * muestre por pantalla a qué porcentaje de esa velocidad viaja un auto que alcanza unos 130km/h.
 */

const VELOCIDAD_LUZ_KM_SEGUNDO = 299792458;
const VELOCIDAD_AUTO_KM_HORA = 130;
const SEGUNDOS_POR_HORA = 3600;
const VELOCIDAD_LUZ_KM_HORA = VELOCIDAD_LUZ_KM_SEGUNDO * SEGUNDOS_POR_HORA;
const VELOCIDAD_AUTO_KM_SEGUNDO = VELOCIDAD_AUTO_KM_HORA / SEGUNDOS_POR_HORA;
let porcentaje;

porcentaje = (VELOCIDAD_AUTO_KM_SEGUNDO * 100) / VELOCIDAD_LUZ_KM_SEGUNDO;
console.log(`El auto alcanza el %${porcentaje} de la velocidad de la luz.`);
porcentaje = (VELOCIDAD_AUTO_KM_HORA * 100) / VELOCIDAD_LUZ_KM_HORA;
console.log(`El auto alcanza el %${porcentaje} de la velocidad de la luz.`);
