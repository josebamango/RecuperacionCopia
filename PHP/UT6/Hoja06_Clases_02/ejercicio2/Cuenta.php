<?php


class Cuenta
{
    protected $numero;
    protected $titular;
    protected $saldo;

    /**
     * Cuenta constructor.
     * @param $numero
     * @param $titular
     * @param $saldo
     */
    public function __construct($numero, $titular, $saldo)
    {
        $this->numero = $numero;
        $this->titular = $titular;
        $this->saldo = $saldo;
    }

    public function ingreso($cantidad)
    {
        $this->saldo += $cantidad;
    }

    public function reintegro($cantidad)
    {
        if ($cantidad >= $this->saldo) {
            $this->saldo -= $cantidad;
        }
    }

    public function esPreferencial($cantidad)
    {
        if ($this->saldo >= $cantidad) {
            return true;
        }
        return false;
    }

    public function mostrar()
    {
        echo "N: $this->numero. Titular: $this->titular<br>Saldo: $this->saldo<br>";
    }
}