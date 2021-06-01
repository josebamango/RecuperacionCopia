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
        alert('objetoObtenido: ', JSON.parse(guardado));
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

/*function mostrarArray(arrayContactos) {
    let texto = "";
    for (const contacto of arrayContactos) {
        texto += contacto.visualizar();
    }
    seccion.innerHTML = texto;
}*/

