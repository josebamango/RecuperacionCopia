addEventListener("load", inicio, false);

function inicio() {
    var mascotas = new Array();
    var mascota;
    var boton1 = document.getElementById("b1");
    boton1.addEventListener("click", function () {
        var A = document.getElementById("nom").value;
        var B = document.getElementById("im").files[0].name;
        var C = document.getElementById("ham").value;
        mascota = new Mascota(A, B, C);
        mascotas.push(mascota);
        document.getElementById("nom").value = "";
        document.getElementById("im").value = "";
        document.getElementById("ham").value = "";
    }, false);
    var boton2 = document.getElementById("b2");
    boton2.addEventListener("click", function () {
        mostrar(mascotas);
    }, false);
}

function mostrar(array) {
    borrado();
    var seccion = document.createElement("section");
    for (var i = 0; i < array.length; i++) {
        var img = document.createElement("img");
        img.setAttribute("id", i);
        img.src = array[i].imagen;
        img.width = 200;
        img.height = 200;
        seccion.appendChild(img);
    }
    document.body.appendChild(seccion);
    var imgs = document.querySelectorAll("img");
    for (var x = 0; x < imgs.length; x++) {
        imgs[x].addEventListener("mouseover", function () {
            var br = document.createElement("br");
            var label1 = document.createElement("label");
            var tlabel1 = document.createTextNode(array[this.id].nombre + " " + array[this.id].hambre);
            seccion.appendChild(br);
            label1.appendChild(tlabel1);
            seccion.appendChild(label1);
        }, false);
        imgs[x].addEventListener("mouseout", function () {
            var label = document.querySelector("label");
            var br = document.querySelector("br");
            br.remove();
            label.remove();
        }, false);
        imgs[x].addEventListener("click", function () {
            array[this.id].comer();
            mostrar(array);
            if (array[this.id].hambre == array[this.id].tope) {
                array.splice(this.id, 1);
                mostrar(array);
            }
        }, false);
    }
}

function borrado() {
    var seccion = document.querySelector("section");
    document.body.removeChild(seccion);
}