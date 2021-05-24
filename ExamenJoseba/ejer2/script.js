addEventListener("load", inicio, false);

function inicio() {
    var resultado = document.getElementById('resultado');
    var arrayCifras = new Array(9, 2, 4, 5, 6, 7, 7, 8, 4, 3, 3, 5, 7);
    console.log(arrayCifras[12]);

    function calcularMedia(arrayCifras, inicio, fin) {
        var total = 0;
        var media = 0;
        for (i = arrayCifras[inicio]; i < arrayCifras[fin]; i++) {
            total += arrayCifras[i];
        }
        media = total / arrayCifras.length;
        resultado.innerHTML = "Media " + media + "\n total " + total;
        console.log(total);
        console.log(media);
    }

    calcularMedia(arrayCifras, 4, 8);

    /*    function calcular() {
            var total = 0;
            var media = 0;
            total = arrayCifras.reduce((a, b) => a + b, 0);
            media = (total / arrayCifras.length);
            resultado.innerHTML += "total->" + total + "\n";
            resultado.innerHTML += "Media->" + media;
        }

        calcular();*/
}