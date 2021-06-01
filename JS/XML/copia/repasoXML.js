addEventListener('load', inicio, false);
var hecho = false;

function inicio() {
    let boton_crearArray = document.getElementById('crearArray');
    boton_crearArray.addEventListener('click', crearArray, false);
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "operaciones.xml", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var arrays = document.querySelectorAll('span');
                var operaciones = xhr.responseXML;
                var visualizar = document.getElementById('visualizar');

                for (var i = 0; i < arrays.length; i++) {
                    arrays[i].addEventListener('mouseover', function (e) {
                        if (hecho == true) {
                            e.preventDefault();
                        } else {
                            var id = this.id;
                            eventoMover(operaciones, id);
                        }

                    }, false);
                    arrays[i].addEventListener('click', function () {


                        hecho = true;
                        var sacar_operacion = operaciones.querySelectorAll(this.id);
                        visualizar.innerHTML = " ";
                        var precios = document.createTextNode("Precio: " + sacar_operacion[0].getAttribute('precio'));
                        visualizar.appendChild(precios);
                        if (sacar_operacion[0].hasChildNodes()) {
                            var longitud = sacar_operacion[0].childNodes;
                            for (var i = 0; i < longitud.length; i++) {
                                if (longitud[i].nodeType == 1) {
                                    var nombre_etiqueta = longitud[i].nodeName.replace("_", " ");
                                    var parrafo = document.createElement('p');
                                    var texto = document.createTextNode(nombre_etiqueta + ": " + (longitud[i].childNodes[0].nodeValue));
                                    parrafo.appendChild(texto);
                                    visualizar.appendChild(parrafo);
                                }
                            }
                        }
                        switch (this.id) {
                            case "futuro":
                                this.id = 0;
                                arrays[this.id].style.backgroundColor = "red";
                                break;
                            case "divisa":
                                this.id = 1;
                                arrays[this.id].style.backgroundColor = "red";
                                break;
                            case "bono":
                                this.id = 2;
                                arrays[this.id].style.backgroundColor = "red";
                                break;
                            case "letra":
                                this.id = 3;
                                arrays[this.id].style.backgroundColor = "red";
                        }

                    }, false);

                }
            } else {
                alert("ERROR" + xhr.status);
            }
        }
    }
}

function eventoMover(operaciones, id) {
    visualizar.innerHTML = " ";
    var sacar_operacion = operaciones.querySelectorAll(id);
    if (sacar_operacion[0].hasChildNodes()) {

        var precios = document.createTextNode("Precio: " + sacar_operacion[0].getAttribute('precio'));
        visualizar.appendChild(precios);
        var longitud = sacar_operacion[0].childNodes;
        for (var i = 0; i < longitud.length; i++) {

            if (longitud[i].nodeType == 1) {
                var nombre_etiqueta = longitud[i].nodeName.replace("_", " ");
                var parrafo = document.createElement('p');
                var texto = document.createTextNode(nombre_etiqueta + ": " + (longitud[i].childNodes[0].nodeValue));
                parrafo.appendChild(texto);
                visualizar.appendChild(parrafo);
            }
        }
    }
}

function crearArray() {
    var array = [];
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "operaciones.xml", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var arrays = document.querySelectorAll('span');
                var operaciones = xhr.responseXML;

                //llenamos las filas del array                
                for (var i = 0; i < arrays.length; i++) {
                    //array.push(arrays[i].id); 
                    array[arrays[i].id] = []
                    var sacar_operacion = operaciones.querySelectorAll(arrays[i].id);
                    if (sacar_operacion[0].hasChildNodes) {

                        var longitud = sacar_operacion[0].childNodes;

                        for (var k = 0; k < longitud.length; k++) {

                            if (longitud[k].nodeType == 1) {
                                var elemento = longitud[k].childNodes[0].nodeValue;
                                array[arrays[i].id].push(elemento);

                            }
                        }


                    }

                }


                mostrarTabla(array);


            } else {
                alert("ERROR" + xhr.status);
            }
        }
    }
}

function mostrarTabla(array) {

    mitabla = document.createElement("table");
    tablatbody = document.createElement("tbody");

    Object.keys(array).forEach(key => {
        fila = document.createElement("tr");
        cabecera = document.createElement('th');
        cabecera_texto = document.createTextNode(key);
        cabecera.appendChild(cabecera_texto);
        tablatbody.appendChild(cabecera);
        array[key].forEach(valor => {
            console.log(key + valor)
            celda = document.createElement("td");
            texto = document.createTextNode(valor);
            celda.appendChild(texto);
            fila.appendChild(celda);
        })
        tablatbody.appendChild(fila);
    })
    mitabla.appendChild(tablatbody);
    document.body.appendChild(mitabla);


}