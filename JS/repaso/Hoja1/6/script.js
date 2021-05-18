addEventListener('load', inicio, false);

function inicio() {
    var resultado = document.getElementById('resultado');
    var mensaje = prompt("Introduce una fecha (dd-NombreMes-aaaa)");
    var fecha = mensaje;
    var arrayFechas = fecha.split("-");

    switch (true) {
        case arrayFechas[1] == 'enero' || arrayFechas[1] == 'febrero' || arrayFechas[1] == 'marzo' || arrayFechas[1] == 'abril':
            resultado.innerHTML = "Estamos en el primer trimestre"
            break;
        case arrayFechas[1] == 'mayo' || arrayFechas[1] == 'junio' || arrayFechas[1] == 'julio' || arrayFechas[1] == 'agosto':
            resultado.innerHTML = "Estamos en el segundo trimestre"
            break;
        case arrayFechas[1] == 'septiembre' || arrayFechas[1] == 'octubre' || arrayFechas[1] == 'noviembre' || arrayFechas[1] == 'diciembre':
            resultado.innerHTML = "Estamos en el tercer trimestre"
            break;
        default:
            resultado.innerHTML = "Estamos en una dimensión paralela sin tiempo ni espacio"
            break;
    }
};