<?php
require_once "Producto.php";

class Electronica extends Producto
{
    private $plazoGarantia;

    /**
     * Electronica constructor.
     * @param $codigo
     * @param $precio
     * @param $nombre
     * @param $categoria
     * @param $plazoGarantia
     */
    public function __construct($codigo, $precio, $nombre, $categoria, $plazoGarantia)
    {
        parent::__construct($codigo, $precio, $nombre, $categoria);
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

    public function __toString(): String
    {
        return parent::__toString() . ", Plazo Garantia: $this->plazoGarantia";
    }


}