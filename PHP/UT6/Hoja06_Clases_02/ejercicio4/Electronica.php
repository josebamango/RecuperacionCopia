<?php
require_once "Producto.php";

class Electronica extends Producto
{
    private $plazoGarantia;

    public function __construct($codigo, $precio, $nombre, $plazoGarantia)
    {
        parent::__construct($codigo, $precio, $nombre);
        $this->plazoGarantia = $plazoGarantia;
    }

    /**
     * @return mixed
     */
    public function getPlazoGarantia()
    {
        return $this->plazoGarantia;
    }

    /**
     * @param mixed $plazoGarantia
     */
    public function setPlazoGarantia($plazoGarantia): void
    {
        $this->plazoGarantia = $plazoGarantia;
    }

    public function __toString()
    {
        return parent::__toString() . " Plazo de garantia: $this->plazoGarantia<br>";
    }
}