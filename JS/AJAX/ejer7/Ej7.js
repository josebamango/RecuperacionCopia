addEventListener("load", inicio, false);


function inicio() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "desayunos.xml", true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let desayunoCollection = xhr.responseXML.querySelectorAll("food");
                let arrayDesayunos = crearObjetos(desayunoCollection);
                crearBotones(arrayDesayunos);
            }
        }
    }

}

function crearObjetos(collection) {
    let arrayDesayunos = Array();
    for (let i = 0; i < collection.length; i++) {
        let nombre = collection[i].querySelector("name").innerHTML;
        let precio = collection[i].querySelector("price").innerHTML;
        let descripcion = collection[i].querySelector("description").innerHTML;
        let calorias = collection[i].querySelector("calories").innerHTML;
        arrayDesayunos.push(new Desayuno(nombre, precio, descripcion, calorias));
    }
    return arrayDesayunos;
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
