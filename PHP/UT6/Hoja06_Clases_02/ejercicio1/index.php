<?php
require_once "Empleado.php";
require_once "Encargado.php";

$empl = new Empleado(1000);
$enc = new Encargado(1500);

echo "Sueldo empleado " . $empl->getSueldo() . "<br>";
echo "Sueldo encargado " . $enc->getSueldo();
