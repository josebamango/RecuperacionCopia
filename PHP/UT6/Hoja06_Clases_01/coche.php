<?php


class Coche
{
    private $matricula;
    private $velocidad;

    /**
     * Coche constructor.
     * @param $matricula
     * @param $velocidad
     */
    public function __construct($matricula, $velocidad)
    {
        $this->matricula = $matricula;
        $this->velocidad = $velocidad;
    }

    public function acelerar($incremento)
    {
        if ($this->velocidad <= 120 && $incremento <= $this->velocidad) {
            $this->velocidad += $incremento;
        }
    }

    public function frenar($decremento)
    {
        if ($this->velocidad >= 0 && $decremento <= $this->velocidad) {
            $this->velocidad += $decremento;
        }
    }


}