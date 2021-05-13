addEventListener("load", inicio, false);

nPalabra = 0;

function inicio() {
    var select = document.getElementById("asignatura");
    var imagen = document.getElementById("imagen");
    var parrafos = document.querySelectorAll("p");
    var listas = document.querySelectorAll("ul");

    for (i = 0; i < parrafos.length; i++) {
        parrafos[i].style.display = 'none';
    }
    for (i = 0; i < listas.length; i++) {
        listas[i].style.display = 'none';
    }

    select.addEventListener("change", function () {
        switch (select.value) {
            case "orion":
                imagen.setAttribute("src", `${select.value}.jpg`);
                for (i = 0; i < parrafos.length; i++) {
                    parrafos[0].style.display = 'block';
                    parrafos[i].style.display = 'none';
                }
                for (i = 0; i < listas.length; i++) {
                    listas[0].style.display = 'block';
                    listas[i].style.display = 'none';
                }
                break;
            case "scar":
                imagen.setAttribute("src", `${select.value}.jpg`);
                for (i = 0; i < parrafos.length; i++) {
                    parrafos[1].style.display = 'block';
                    parrafos[i].style.display = 'none';
                }
                for (i = 0; i < listas.length; i++) {
                    listas[1].style.display = 'block';
                    listas[i].style.display = 'none';
                }
                break;
            case "lost":
                imagen.setAttribute("src", `${select.value}.jpg`);
                for (i = 0; i < parrafos.length; i++) {
                    parrafos[2].style.display = 'block';
                    parrafos[i].style.display = 'none';
                }
                for (i = 0; i < listas.length; i++) {
                    listas[2].style.display = 'block';
                    listas[i].style.display = 'none';
                }
                break;
            case "nets":
                imagen.setAttribute("src", `${select.value}.jpg`);
                for (i = 0; i < parrafos.length - 1; i++) {
                    parrafos[3].style.display = 'block';
                    parrafos[i].style.display = 'none';
                }
                for (i = 0; i < listas.length - 1; i++) {
                    listas[3].style.display = 'block';
                    listas[i].style.display = 'none';
                }
                break;
            case "default":
                alert("Selecciona una asignatura")
                break;
            default:
                console.log('Lo lamentamos');
        }
    }, false);

    var liSelected = Array();
    var palabrasCorrectas = Array(
        Array("cinturon", "orion", "cazador"),
        Array("scarface", "alpacino", "dePalma"),
        Array("frequencies", "belga", "deepHouse"),
        Array("nets", "harden", "nba"),
    );

    var spans = document.querySelectorAll("span");
    var ul = document.querySelector("ul");
    var corregirBoton = document.getElementById("corregir");


    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].addEventListener("click", function () {
            for (let j = 0; j < spans.length; j++) {
                if (spans[j].innerHTML === "....") {
                    liSelected.push(this);
                    spans[j].innerHTML = this.innerHTML;
                    ul.removeChild(liSelected[j]);
                    increasenPalabra();
                    break;
                }
            }
        }, false);
    }

    // SPANS
    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener("click", function () {
            ul[i] = document.querySelector("ul");
            decreasenPalabra();
            ul[i].appendChild(liSelected.pop());
            this.innerHTML = "....";
        }, false);
    }

    corregirBoton.addEventListener("click", function () {
        var resultado = "";
        for (i = 0; i < spans.length - 1; i++) {
            if (!corregirFrase(spans[i], palabrasCorrectas[i], ul[i])) {
                if (corregirBoton.value === "Segunda oportunidad") {
                    corregirBoton.disabled = true;
                    alert("Se acabaron las opciones");
                } else {
                    corregirBoton.value = "Segunda oportunidad";
                }
            } else {
                corregirBoton.disabled = true;
                resultado = "Correcto!";
            }
        }
        alert(resultado);

    }, false);


}

function corregirFrase(arraySpan, palabrasCorrectas, ul) {
    let aux = true;
    for (let i = 0; i < arraySpan.length; i++) {
        if (arraySpan[i].innerHTML !== palabrasCorrectas[i]) {
            let texto = arraySpan[i].innerHTML;
            let li = document.createElement("li");
            li.innerHTML = texto;
            ul.append(li);
            arraySpan[i].innerHTML = "....";
            arraySpan[i].style.color = "red";
            aux = false;
        } else {
            arraySpan[i].style.color = "green";
        }
    }
    nPalabra = 0;
    return aux;
}

function decreasenPalabra() {
    if (nPalabra !== 0) {
        nPalabra--;
    }
}

function increasenPalabra() {
    if (nPalabra !== document.querySelectorAll("span").length) {
        nPalabra++;
    }
}