addEventListener("load", inicio, false);

function inicio() {
    var l1 = document.getElementById('l1');
    var l2 = document.getElementById('l2');
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var lista1 = document.getElementById('lista1');
    var lista2 = document.getElementById('lista2');
    var select1 = document.getElementById('select1');
    var select2 = document.getElementById('select2');
    var boton = document.getElementById('boton');

     boton.addEventListener("click", getSelectedRadio, false);


    function getSelectedRadio() {
        return document.querySelector('input[name="nameradio"]:checked').value;
    }

    var radios = document.querySelector('input[name="nameradio"]:checked');

    boton.addEventListener("click", function () {
        switch (getSelectedRadio()) {
            case "select1":
                var arrayNumeros = new Array("uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez");
                for (i = 0; i <= arrayNumeros.length - 1; i++) {
                    var opcion = document.createElement('option');
                    opcion.innerHTML = arrayNumeros[i];
                    select1.appendChild(opcion);
                }
                break;
            case "lista1":
                var li1 = document.createElement('li');
                var li2 = document.createElement('li');
                var li3 = document.createElement('li');
                li1.innerHTML = "enero";
                li2.innerHTML = "febrero";
                li3.innerHTML = "marzo";
                lista1.appendChild(li1);
                lista1.appendChild(li2);
                lista1.appendChild(li3);
                break;
            case "select2":
                var opcion = document.createElement('option');
                var opcion2 = document.createElement('option');
                opcion.innerHTML = "22";
                opcion2.innerHTML = "11";
                select2.appendChild(opcion);
                select2.appendChild(opcion2);
                break;
            case "lista2":
                var arrayLetras = new Array("a", "b", "c", "d", "e");
                for (let i = 0; i < arrayLetras.length; i++) {
                    var li = document.createElement('li');
                    li.innerHTML = arrayLetras[i];
                    lista2.appendChild(li);
                }
                break;
            case "default":
                alert("Selecciona una opcion")
                break;
            default:
                console.log('Lo lamentamos');
        }

    })

}