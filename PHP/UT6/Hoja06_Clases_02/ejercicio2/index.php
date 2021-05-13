<?php
require_once "CuentaAhorro.php";
require_once "CuentaCorriente.php";

$cc = new CuentaCorriente(3, "Pepito Pérez", 1109, 11);
$ca = new CuentaAhorro(4, "Juanito Juárez", 1109, 9, 50);

$cc->mostrar();
$cc->reintegro(20);
$cc->mostrar();

echo "<hr>";

$ca->mostrar();
$ca->aplicaIntereses(0.2);
$ca->mostrar();
