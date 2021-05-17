addEventListener("load", inicio, false);

function inicio() {
    var nombre = document.getElementById('nombre');
    var saldo = document.getElementById('saldo');
    var seccion = document.getElementById('seccion');
    var cantidadIngreso = document.getElementById('ingreso');
    var aumentar = document.getElementById('aumentar');
    var cantidadRetirada = document.getElementById('retirada');
    var bajar = document.getElementById('bajar');
    var alta = document.getElementById('alta');
    var listado = document.getElementById('listado');
    var arrayClientes = new Array();
    for (let i = 0; i < 5; i++) {
        console.log(Math.round(Math.random() * (9999999999 - 1111111111) + 1111111111));
    }
    alta.addEventListener("click", function () {
        arrayClientes.push(new Cliente(Math.round(Math.random() * (9999999999 - 1111111111) + 1111111111), nombre.value, saldo.value));
        console.log(arrayClientes);

    });

    listado.addEventListener("click", function () {
        var elegir = document.createElement('select');
        seccion.appendChild(elegir);
        elegir.setAttribute('class', 'form-control');
        for (let i = 0; i < arrayClientes.length; i++) {
            var opcion = document.createElement('option');
            elegir.appendChild(opcion);
            opcion.innerHTML = arrayClientes[i].nombre;
            elegir.setAttribute('id', 'clienteSelected');
            opcion.setAttribute('value', arrayClientes[i].numero);
        }
    });
    aumentar.addEventListener("click", function () {
        var clienteSelected = document.getElementById('clienteSelected');
        for (let i = 0; i < arrayClientes.length; i++) {
            if (arrayClientes[i].numero == clienteSelected.value) {
                arrayClientes[i].ingreso(cantidadIngreso);
            }
        }
        console.log(arrayClientes);
    });

    bajar.addEventListener("click", function () {
        for (let i = 0; i < arrayClientes.length; i++) {
            if (arrayClientes[i].numero == clienteSelected.value) {
                arrayClientes[i].retirada(cantidadRetirada);
            }
        }
        console.log(arrayClientes);
    });

    /*mostrarArray(arrayClientes);

    function mostrarArray(arrayClientes) {
        let texto = "";
        for (const cliente of arrayClientes) {
            texto += cliente.visualizar();
        }
        resultado.innerHTML = texto;
    }*/
}