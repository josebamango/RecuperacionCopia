<?php
require_once "Circulo.php";
require_once "Monedero.php";
require_once "coche.php";

$circulo1 = new Circulo(3);

$circulo1->radio = 5;

echo $circulo1->radio;

$monedero1 = new Monedero(1000);

echo "<br>Cantidad actual: " . $monedero1->getDinero();
$monedero1->meterDinero(5000);
echo "<br>Meter 5000€: " . $monedero1->getDinero();
$monedero1->sacarDinero(1200);
echo "<br>Sacar 1200€: " . $monedero1->getDinero();
$monedero1->sacarDinero(3000);
echo "<br>Sacar 3000€: " . $monedero1->getDinero();
echo "<br>" . Monedero::$numero_monederos;

$monedero2 = clone $monedero1;
echo $monedero1 === $monedero2;
