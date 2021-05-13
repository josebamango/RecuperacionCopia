addEventListener("load", inicio, false);

function inicio() {
    /* ELEMENTOS DEL HTML */
    var tabla = document.getElementById('tabla');
    var alta = document.getElementById('alta');
    var tratamiento = document.getElementById('tratamiento');
    var vertodos = document.getElementById('vertodos');
    var arraySalas = new Array();

    /* EVENTOS */
    mostrar.addEventListener("click", function () {
        resultado.value = "";
        resultado.value += mostrarArray(arrayEdificios);
    }, false)
    let arrayEdificios = Array();
    addEdificio.addEventListener("click", function () {
        let ed = new Edificio(calle.value, numero.value, cp.value, crearArrayPlantas(nplantas.value));
        ed.addPlantasPuertas(parseInt(npuertas.value));
        arrayEdificios.push(ed);
    }, false);
    addPropietario.addEventListener("click", function () {
        arrayEdificios[nedificio.value - 1].addPropietario(nombre.value, planta.value, puerta.value);
    }, false)


    pintar();


    function pintar() {
        for (i = 0; i < 3; i++) {
            arraySalas[i] = new Array();
            tabla.innerHTML += "Planta " + (i + 1) + " => ";
            for (j = 0; j < 6; j++) {
                arraySalas[i][j] = Math.floor(Math.random() * 2) + 0;
                var imagen = document.createElement('img');
                imagen.setAttribute('src', 'libre.png');
                tabla.appendChild(imagen);
            }
            ;
            tabla.innerHTML += "<br>";
        }
        ;
    };


    function mostrarArray(array) {
        let texto = "";
        for (const arrayElement of array) {
            texto += `${arrayElement.imprimirInfo()}\n${arrayElement.imprimePlantas()}\n\n`;
        }
        return texto;
    }

    function crearArrayPlantas(nPlantas) {
        let array = Array(nPlantas);
        for (let i = 0; i < nPlantas - 1; i++) {
            array.push(i);
        }
        return array;
    }

}