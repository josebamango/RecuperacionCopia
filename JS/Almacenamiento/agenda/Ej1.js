addEventListener("load", inicio, false);

function inicio() {
    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById("telefono");
    let cp = document.getElementById("cp");
    let email = document.getElementById("email");
    let guardarLocal = document.getElementById("guardarLocal");
    let obtenerLocal = document.getElementById("obtenerLocal");
    let eliminarLocal = document.getElementById("eliminarLocal");
    var seccion = document.getElementById("seccion");
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
            var c1 = new Cliente(nombre.value, telefono.value, cp.value, email.value);
            localStorage.setItem("datos", JSON.stringify(c1));
        } catch (e) {
            alert("Error al guardar sesion")
        }
    }, false);


    obtenerLocal.addEventListener("click", function () {
        var guardado = localStorage.getItem('datos');
        console.log('objetoObtenido: ', JSON.parse(guardado));
        seccion.innerHTML = Object.values(guardado);


    }, false);

    eliminarLocal.addEventListener("click", function () {
        try {
            document.body.removeChild(document.querySelector("section"));
            ;
        } catch (e) {
        }
        localStorage.clear();
    });


}

function generarContenido(array) {
    try {
        //document.body.removeChild(document.querySelector("section"));
        ;
    } catch (e) {
    }
    let section = document.createElement("section");
    for (let i = 0; i < array.length; i++) {
        let p = document.createElement("p");
        p.innerText = array[i];
        section.appendChild(p);
    }
    document.body.appendChild(section);
}



