<?php


class Encargado extends Empleado
{

    /**
     * Encargado constructor.
     */
    public function __construct($sueldo)
    {
        parent::__construct($sueldo);
    }

    /**
     * @return mixed
     */
    public function getSueldo()
    {
        return parent::getSueldo()*1.15;
    }
}