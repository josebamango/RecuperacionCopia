<?php


class Empleado
{
    protected $sueldo;

    /**
     * Empleado constructor.
     * @param $sueldo
     */
    public function __construct($sueldo)
    {
        $this->sueldo = $sueldo;
    }

    /**
     * @return mixed
     */
    public function getSueldo()
    {
        return $this->sueldo;
    }

}