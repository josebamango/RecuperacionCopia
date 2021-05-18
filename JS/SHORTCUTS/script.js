addEventListener("load", inicio, false);

function inicio() {
    var nombre = document.getElementById('nombre');
    var edad = document.getElementById('edad');
    var sueldo = document.getElementById('sueldo');
    var direccion = document.getElementById('direccion');
    var boton = document.getElementById('boton');
    var resultado = document.getElementById('resultado');
    var arrayLibros = new Array();

    function rellenar() {
        for (i = 1; i <= 2; i++) {
            var titulo = prompt('Introduce el titulo del libro ' + i);
            var autor = prompt('Introduce el autor del libro ' + i);
            var año = prompt('Introduce el año del libro ' + i);
            var genero = prompt('Introduce el genero del libro ' + i).toLocaleLowerCase();
            if (titulo != '' && autor != '' && !isNaN(año) && año.length == 4 && (genero == 'avententura' || genero == 'fantasia' || genero == 'terror')) {
                var libro = new Libro(titulo, autor, año, genero);
                arrayLibros.push(libro);
            } else {
                alert("Introduce los datos correctamente");

            }

        }
    }


    function ordenados(arraylibros) {
        let arrayAutores = new Array();
        for (const libro of arraylibros) {
            arrayAutores.push(libro.getAutor().sort());
        }
        console.log(arrayAutores);
    }


    function mostrarArray(arrayLibros) {
        let texto = "";
        for (const libro of arrayLibros) {
            texto += libro.visualizar();
        }
        resultado.innerHTML = texto;
    }

    function aleatorio(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

    function getSelectedIndex() {
        var select = document.getElementById("idselect");
        var options = document.getElementsByTagName("option");
        console.log(select.value);
        console.log(options[select.value - 1].innerHTML);
    }

    function getSelectedRadio() {
        console.log(document.querySelector('input[name="nameradio"]:checked').value);
    }

    function crearImagenes() {
        var imagen = document.createElement('img');
        document.body.appendChild(imagen);
        imagen.setAttribute('src', "cobaya.jpg");
    }



    aleatorio(10, 100);
    crearImagenes();
    boton.addEventListener("click", getSelectedRadio);
    boton.addEventListener("click", getSelectedIndex);


}