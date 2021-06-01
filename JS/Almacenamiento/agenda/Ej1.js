addEventListener("load", inicio, false);

function inicio() {
    var nombre = document.getElementById("nombre");
    var telefono = document.getElementById("telefono");
    var cp = document.getElementById("cp");
    var email = document.getElementById("email");
    var guardarLocal = document.getElementById("guardarLocal");
    var obtenerLocal = document.getElementById("obtenerLocal");
    var eliminarLocal = document.getElementById("eliminarLocal");
    var nombreBuscar = document.getElementById('nombreBuscar');
    var buscar = document.getElementById('buscar');
    var seccion = document.getElementById("seccion");
    var resultado = document.getElementById("resultado");
    var arrayContactos = new Array();

    function startTime() {
        var today = new Date();
        var hr = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        min = checkTime(min);
        sec = checkTime(sec);
        document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
        var time = setTimeout(function () {
            startTime()
        }, 500);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    startTime();

    function validacion() {
        if (telefono.value.length != 9) {
            alert('Introduce un telefono válido');
            return false;
        } else if (cp.value.length != 5) {
            alert('Introduce un código postal válido');
            return false;
        }
    };

    guardarLocal.addEventListener("click", validacion, false);

    guardarLocal.addEventListener("click", function () {
        try {
            var arrayContactos = new Array();
            var c1 = new Cliente(nombre.value, telefono.value, cp.value, email.value);
            arrayContactos.push(c1);
            localStorage.setItem("datos", JSON.stringify(arrayContactos));
        } catch (e) {
            alert("Error al guardar sesion")
        }
    }, false);


    obtenerLocal.addEventListener("click", function () {
        var guardado = localStorage.getItem('datos');
        var machete = JSON.parse(guardado);
        console.log('objetoObtenido: ', JSON.parse(guardado));
        for (let i = 0; i < machete.length; i++) {
            seccion.innerHTML += `Nombre: ${machete[i].nombre} <br> Teléfono: ${machete[i].telefono} <br> CP:  ${machete[i].cp} <br> Email:  ${machete[i].email} <hr>`;
        }
    }, false);

    eliminarLocal.addEventListener("click", function () {
        try {
            document.body.removeChild(document.querySelector("section"));
            ;
        } catch (e) {
        }
        localStorage.clear();
    });


    buscar.addEventListener('click', function () {
        alert(machete[0].nombre)
        for (let i = 0; i < machete.length; i++) {
            if (nombreBuscar.value.toLowerCase() == machete[i].nombre.toLowerCase()) {
                resultado.innerHTML = `Nombre: ${machete[i].nombre} \n Teléfono: ${machete[i].telefono}  CP:  ${machete[i].cp}  Email:  ${machete[i].email} `
            } else {
                alert('Introduce un nombre valido');
            }
        }

    }, false);

}





