addEventListener("load", inicio, false);

function inicio() {
    var mensaje = prompt("Introduce una cadena");

    function agregarIndice(palabraDeletreo) {
        var i = 0;
        while (i < palabraDeletreo.length) {
            document.write(palabraDeletreo.charAt(i) + (i + 1));
            i++;
        }
        document.write("<br> La cadena final tiene " + (mensaje.length * 2) + " catacteres")
    }

    function generarPalabra() {
        let div = document.createElement("div");
        document.body.appendChild(div);
        for (const letra of mensaje) {
            div.appendChild(generarLabel(letra));
        }
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));
    }

    function generarLabel(letra) {
        let label = document.createElement("label");
        label.setAttribute("style", "border: black 1px solid; margin: 1em; padding: 0.5em");
        label.innerHTML = letra;
        return label;
    }

    generarPalabra();
    agregarIndice(mensaje);
    generarLabel(mensaje);
}
