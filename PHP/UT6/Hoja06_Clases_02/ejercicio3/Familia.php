<?php
require_once "Medico.php";

class Familia extends Medico
{
    private $num_pacientes;

    /**
     * Familia constructor.
     * @param $num_pacientes
     */
    public function __construct($nombre, $edad, $turno, $num_pacientes)
    {
        parent::__construct($nombre, $edad, $turno);
        $this->num_pacientes = $num_pacientes;
    }

    /**
     * @return mixed
     */
    public function getNumPacientes()
    {
        return $this->num_pacientes;
    }

    /**
     * @param mixed $num_pacientes
     */
    public function setNumPacientes($num_pacientes): void
    {
        $this->num_pacientes = $num_pacientes;
    }



    function mostrarDatos()
    {
        echo "Nombre: $this->nombre, Edad: $this->edad, Turno: $this->turno, nPac: $this->num_pacientes<br>";
    }


}