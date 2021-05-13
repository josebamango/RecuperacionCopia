<?php


class Monedero
{
    private $dinero;
    public static $numero_monederos = 0;

    /**
     * Monedero constructor.
     * @param $dinero
     */
    public function __construct($dinero)
    {
        $this->dinero = $dinero;
        self::$numero_monederos++;
    }

    public function __destruct()
    {
        self::$numero_monederos--;
    }


    /**
     * @return mixed
     */
    public function getDinero()
    {
        return $this->dinero;
    }

    function sacarDinero($cantidad)
    {
        if ($cantidad < $this->dinero) {
            $this->dinero -= $cantidad;
        }
    }

    function meterDinero($cantidad)
    {
        $this->dinero += $cantidad;
    }
}