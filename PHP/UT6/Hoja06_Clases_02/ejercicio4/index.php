<?php

require_once "Productos.php";
require_once "Alimentacion.php";
require_once "Electronica.php";
$carrito = array(
    new Alimentacion("1109", 19, "Jack Daniel`s", 01, 22),
    new Alimentacion("54dfsd", 7.55, "Quarter Horse", 07, 25),
    new Alimentacion("1as1as", 14.95, "Four Roses", 12, 50),
    new Alimentacion("1as1as", 14.95, "Four Roses", 12, 50),
    new Electronica("01sas0", 80, "nfortec vega", "2 años"),
    new Electronica("asd11", 30, "mi band 5", "2 años"),
    new Electronica("egfsd45sd", 350, "zotac rtx 2060", "2 años"),
);


function getProductos($carrito)
{
    echo "CEESTA DE LA COMPRA: <br><br>";
    foreach ($carrito as $productos) {
        echo $productos;
    }

}

function getGasto($carrito)
{
    $total = 0;
    foreach ($carrito as $producto) {
        $total += $producto->getPrecio();
    }
    echo "<br>El gasto total ha sido: " . $total . "€";
}

function mayorGasto($carrito)
{
    $totalAlimentacion = 0;
    $totalElectronica = 0;
    foreach ($carrito as $producto) {
        if ($producto instanceof Alimentacion) {
            $totalAlimentacion += $producto->getPrecio();
        } else {
            $totalElectronica += $producto->getPrecio();
        }
    }
    if ($totalElectronica > $totalAlimentacion) {
        echo "<br>Se ha gastado más en electrónica, concretamente " . $totalElectronica . "€";
    } else {
        echo "<br>Se ha gastado mas en alimentación, concretamente " . $totalAlimentacion . "€";
    }
}

getProductos($carrito);
getGasto($carrito);
mayorGasto($carrito);

