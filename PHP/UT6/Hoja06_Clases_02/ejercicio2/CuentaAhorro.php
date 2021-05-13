<?php
require_once "Cuenta.php";

class CuentaAhorro extends Cuenta
{
    private $comision_apertura;
    private $intereses;

    /**
     * CuentaAhorro constructor.
     * @param $comision_apertura
     * @param $intereses
     */
    public function __construct($numero, $titular, $sueldo, $comision_apertura, $intereses)
    {
        parent::__construct($numero, $titular, $sueldo);
        $this->comision_apertura = $comision_apertura;
        $this->intereses = $intereses;
        if ($comision_apertura < $this->saldo) {
            $this->saldo -= $comision_apertura;
        }
    }

    public function aplicaIntereses($interes)
    {
        $this->saldo *= (1+$interes);
    }

    public function mostrar()
    {
        parent::mostrar();
        echo " Comision: $this->comision_apertura, Intereses: $this->intereses<br>";
    }


}