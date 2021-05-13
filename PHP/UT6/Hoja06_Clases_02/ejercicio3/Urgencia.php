<?php
require_once "Medico.php";

class Urgencia extends Medico
{
    private $unidad;

    /**
     * Urgencia constructor.
     * @param $unidad
     */
    public function __construct($nombre, $edad, $turno, $unidad)
    {
        parent::__construct($nombre, $edad, $turno);
        $this->unidad = $unidad;
    }

    function mostrarDatos()
    {
        echo "Nombre: $this->nombre, Edad: $this->edad, Turno: $this->turno, Unidad: $this->unidad<br>";
    }


}