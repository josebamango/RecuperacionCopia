<?php
require_once "Cuenta.php";

class CuentaCorriente extends Cuenta
{
    private $cuota_mantenimiento;

    /**
     * CuentaCorriente constructor.
     * @param $cuota_mantenimiento
     */
    public function __construct($numero, $titular, $saldo, $cuota_mantenimiento)
    {
        parent::__construct($numero, $titular, $saldo);
        $this->cuota_mantenimiento = $cuota_mantenimiento;
        if ($cuota_mantenimiento < $this->saldo) {
            $this->saldo -= $cuota_mantenimiento;
        }
    }

    public function reintegro($cantidad)
    {
        if ($this->saldo > 20 && $this->saldo > $cantidad) {
            $this->saldo -= $cantidad;
        }
    }

    public function mostrar()
    {
        parent::mostrar();
        echo " Cuota de Mantenimiento: $this->cuota_mantenimiento<br>";
    }
}