addEventListener("load", inicio, false);

function inicio() {
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

    rellenar();
    console.log(arrayLibros);
    mostrarArray(arrayLibros);
    ordenados(arrayLibros);

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


}