<?php


class Electronica extends Productos
{
    private $plazo_garantia;

    public function __construct($codigo, $precio, $nombre, $plazo_garantia)
    {
        parent::__construct($codigo, $precio, $nombre);
        $this->plazo_garantia = $plazo_garantia;
    }

    /**
     * @return mixed
     */
    public function getPlazoGarantia()
    {
        return $this->plazo_garantia;
    }

    /**
     * @param mixed $plazo_garantia
     */
    public function setPlazoGarantia($plazo_garantia)
    {
        $this->plazo_garantia = $plazo_garantia;
    }

    public function __toString()
    {
        return parent::__toString() ." tiene ". $this->plazo_garantia . " de garantía <br>";
    }
}