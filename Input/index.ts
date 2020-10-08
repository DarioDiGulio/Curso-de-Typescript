/** FUNCIONALIDAD DADA */

/* En input se guarda el texto ingresado por el usuario */
const input = document.getElementById('input');
const output = document.getElementById('output');
const submit = document.getElementById('submit');

submit.addEventListener('click', ejercicio);

/* Utilizar setOutput(text) para mostrar por pantalla el resultado final */
const setOutput = (text) => output.innerText = text;

function ejercicio(){
    let value = input.value;
    /** Resolver ejercicio acá adentro */
    setOutput(value);
}
