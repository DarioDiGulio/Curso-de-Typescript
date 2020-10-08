/** FUNCIONALIDAD DADA */
/* En input se guarda el texto ingresado por el usuario */
var input = document.getElementById('input');
var output = document.getElementById('output');
var submit = document.getElementById('submit');
submit.addEventListener('click', ejercicio);
/* Utilizar setOutput(text) para mostrar por pantalla el resultado final */
var setOutput = function (text) { return output.innerText = text; };
function ejercicio() {
    var value = input.value;
    /** Resolver ejercicio acá adentro */
    setOutput(value);
}
