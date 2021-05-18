addEventListener("load", inicio, false);

function inicio() {
    let n1 = document.getElementById("valorCaja1");
    let n2 = document.getElementById("valorCaja2");
    let boton = document.getElementById("enviar");
    n1.addEventListener('keypress', soloNumeros, false);
    n2.addEventListener('keypress', soloNumeros, false);

    boton.addEventListener("click", function () {
        let xhr = new XMLHttpRequest();
        let datos = new FormData();
        datos.append("valorCaja1", n1.value);
        datos.append("valorCaja2", n2.value);
        xhr.open("POST", "php1.php", true);
        xhr.send(datos);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    document.querySelector("section").innerHTML = xhr.responseText;
                } else {
                    alert("ERROR" + xhr.status);
                }
            }
        }
    });

    function soloNumeros(e) {
        var key = window.event ? e.which : e.keyCode;
        if (key < 48 || key > 57) {
            e.preventDefault();
        }
    }
}