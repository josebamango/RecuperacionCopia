addEventListener("load", inicio, false);

function inicio() {
    var resultado = document.getElementById('resultado');
    var arrayCifras = new Array(9, 2, 4, 5, 6, 7, 7, 8, 4, 3, 3, 5, 7);
    console.log(arrayCifras[11]);

    /*    function calcularMedia(inicio, fin) {
            var total = 0;
            var media = 0;
             for (i = arrayCifras[inicio]; i < arrayCifras[fin]; i++) {
                 total += arrayCifras[i];
             }

        }

        calcularMedia(3, 7);*/

    function calcular() {
        var total = 0;
        var media = 0;
        total = arrayCifras.reduce((a, b) => a + b, 0);
        media = (total / arrayCifras.length);
        resultado.innerHTML += "total->" + total + "\n";
        resultado.innerHTML += "Media->" + media;
    }

    calcular();
}