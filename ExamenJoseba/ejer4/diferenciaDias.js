addEventListener("load", inicio, false);

function inicio() {
    let fecha1Input = document.getElementById("inputFecha1");
    let fecha2Input = document.getElementById("inputFecha2");
    let dni = document.getElementById("dni");
    let habitacion = document.getElementById("habitacion");
    let diferenciaBoton = document.getElementById("botonDiferencia");
    let resultado = document.getElementById("textAreaResultado");
    diferenciaBoton.addEventListener("click", function () {
        var cliente = new Habitahos(habitacion.value, false, fecha1Input.value, fecha2Input.value, dni.value);
        var total = diferenciaDias(fecha1Input, fecha2Input) * 30;
        resultado.value = "El cliente de la habitacion numero:  " + habitacion.value + " y con DNI " + dni.value + " ha estado " + diferenciaDias(fecha1Input, fecha2Input) + " dias y has gastado  " + total + "€";

    }, false);
}

function diferenciaDias(fecha1Input, fecha2Input) {
    let diaMs = 1000 * 60 * 60 * 24;
    let fecha1 = new Date(fecha1Input.value);
    let fecha2 = new Date(fecha2Input.value);
    if (fecha1 < fecha2) {
        return ((fecha2 - fecha1) / diaMs);
    }
}


