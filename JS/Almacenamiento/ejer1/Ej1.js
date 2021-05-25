addEventListener("load", inicio, false);

function inicio() {
    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById("telefono");
    let cp = document.getElementById("cp");
    let email = document.getElementById("email");
    let guardarLocal = document.getElementById("guardarLocal");
    let obtenerLocal = document.getElementById("obtenerLocal");
    let eliminarLocal = document.getElementById("eliminarLocal");
    let nombreBuscar = document.getElementById("nombreBuscar");
    let buscar = document.getElementById("buscar");
    var seccion = document.getElementById("seccion");
    var arrayContactos = new Array();

    guardarLocal.addEventListener("click", function () {
        try {
            localStorage.setItem("nombre", nombre.value);
            localStorage.setItem("telefono", telefono.value);
            localStorage.setItem("cp", cp.value);
            localStorage.setItem("email", email.value);
            arrayContactos.push(new Cliente(nombre.value, telefono.value, cp.value, email.value));
            console.log(arrayContactos);
        } catch (e) {
            alert("Error al guardar sesion")
        }
    }, false);

    obtenerLocal.addEventListener("click", function () {
        let array = Array();
        array.push("Nombre-> " + localStorage.getItem("nombre"));
        array.push("Teléfono-> " + localStorage.getItem("telefono"));
        array.push("Código postal-> " + localStorage.getItem("cp"));
        array.push("Email-> " + localStorage.getItem("email"));
        generarContenido(array);
        //mostrarArray(arrayContactos);
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
        for (const contacto of arrayContactos) {
            if (nombreBuscar.value == contacto.nombre) {
                alert(contacto.visualizar());
            }
        }
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

