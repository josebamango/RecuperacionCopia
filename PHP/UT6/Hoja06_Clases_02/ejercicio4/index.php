<?php
require_once "Electronica.php";
require_once "Alimentacion.php";

/*$alimentos = array(
    new Alimentacion(1, 50, "Caquis", 3, 2020),
    new Alimentacion(2, 25, "Platanos", 2, 2020)
);
$electronica = array(
    new Electronica(3, 100, "OnePlus8", 2),
    new Electronica(4, 200, "iPhone", 2)
);*/
$cesta = array(
    new Alimentacion(1, 50, "Caquis", 3, 2020),
    new Alimentacion(2, 25, "Platanos", 2, 2020),
    new Electronica(3, 100, "OnePlus8", 2),
    new Electronica(4, 200, "iPhone", 2)
);


$precio = importeTotal_Imprimir($cesta);
echo "<hr>TOTAL: $precio<br>";



usort($cesta, "ordenarPrecios");
echo "Producto mas caro: " . $cesta[0]->getNombre() . "<br>";
$totalAlimentos = importeAlimentacion($cesta);
$totalElectronica = importeElectronica($cesta);
if ($totalAlimentos > $totalElectronica) {
    echo "Se ha gastado mas en Alimentos: $totalAlimentos";
} else if ($totalAlimentos < $totalElectronica) {
    echo "Se ha gastado mas en Electronica: $totalElectronica";
} else {
    echo "Se ha gastado lo mismo en los dos tipos: $totalElectronica";
}

// FUNCIONES
function importeElectronica(array $cesta)
{
    $precio = 0;
    foreach ($cesta as $item) {
        if ($item instanceof Electronica) {
            $precio += $item->getPrecio();
        }
    }
    return $precio;
}

function importeAlimentacion(array $cesta)
{
    $precio = 0;
    foreach ($cesta as $item) {
        if ($item instanceof Alimentacion) {
            $precio += $item->getPrecio();
        }
    }
    return $precio;
}

;
function importeTotal_Imprimir(array $cesta)
{
    $precio = 0;
    foreach ($cesta as $item) {
        if ($item instanceof Producto) {
            echo $item;
            $precio += $item->getPrecio();
        }
    }
    return $precio;
}

function ordenarPrecios($a, $b) {
    return $b->getPrecio() - $a->getPrecio();
}
