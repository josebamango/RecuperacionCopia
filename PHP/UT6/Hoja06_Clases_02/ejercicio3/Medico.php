<?php


abstract class Medico
{
    protected $nombre;
    protected $edad;
    protected $turno;

    /**
     * Medico constructor.
     * @param $nombre
     * @param $edad
     * @param $turno
     */
    public function __construct($nombre, $edad, $turno)
    {
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->turno = $turno;
    }

    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre): void
    {
        $this->nombre = $nombre;
    }

    /**
     * @return mixed
     */
    public function getEdad()
    {
        return $this->edad;
    }

    /**
     * @param mixed $edad
     */
    public function setEdad($edad): void
    {
        $this->edad = $edad;
    }

    /**
     * @return mixed
     */
    public function getTurno()
    {
        return $this->turno;
    }

    /**
     * @param mixed $turno
     */
    public function setTurno($turno): void
    {
        $this->turno = $turno;
    }

    abstract function mostrarDatos();
    public function mostrarSeniorTarde()
    {
        if ($this->edad > 60 && $this->turno === "tarde") {
            return 1;
        }
        return 0;
    }
}