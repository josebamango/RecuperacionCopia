addEventListener("load", inicio, false);


function inicio() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "dineros.xml", true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let listadoCollection = xhr.responseXML.querySelectorAll("breakfast_menu");
                let arrayListados = crearObjetos(listadoCollection);
                crearBotones(arrayListados);
            }
        }
    }

}

function crearObjetos(collection) {
    let arrayListados = Array();
    for (let i = 0; i < collection.length; i++) {
        let producto = collection[i].querySelector("producto").innerHTML;
        let mercado = collection[i].querySelector("mercado").innerHTML;
        let ciudad = collection[i].querySelector("ciudad_procedencia").innerHTML;
        arrayListados.push(new Listado(producto, mercado, ciudad));
    }
    return arrayListados;
}

function crearBotones(arrayObjetos) {
    let div = document.createElement("div");
    let table = document.createElement("table");
    for (let i = 0; i < arrayObjetos.length; i++) {
        let th = document.createElement('th');
        th.style.border="thick solid #0000FF";
        table.appendChild(th);
        th.setAttribute("id", arrayObjetos[i].nombre);
        th.innerHTML = `Desayuno tipo ${i + 1}`;
        th.addEventListener("mouseenter", function () {
            this.className = "botonResaltado";
            let divInfo = document.createElement("div");
            divInfo.className = "infoDiv";
            divInfo.innerHTML = arrayObjetos[i].visualizar();
            document.body.appendChild(divInfo);
        })
        th.addEventListener("mouseleave", function () {
            this.className = "";
            try {
                document.body.removeChild(document.querySelector(".infoDiv"));
            } catch (e) {
            }
        })
        div.appendChild(table);
    }
    document.body.appendChild(div);
}
