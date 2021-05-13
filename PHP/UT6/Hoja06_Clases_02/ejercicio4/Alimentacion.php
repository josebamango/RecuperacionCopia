<?php
require_once "Producto.php";

class Alimentacion extends Producto
{
    private $month;
    private $year;

    public function __construct($codigo, $precio, $nombre, $month, $year)
    {
        parent::__construct($codigo, $precio, $nombre);
        $this->month = $month;
        $this->year = $year;
    }

    /**
     * @return mixed
     */
    public function getMonth()
    {
        return $this->month;
    }

    /**
     * @param mixed $month
     */
    public function setMonth($month): void
    {
        $this->month = $month;
    }

    /**
     * @return mixed
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * @param mixed $year
     */
    public function setYear($year): void
    {
        $this->year = $year;
    }

    public function __toString()
    {
        return parent::__toString() . " Fecha: $this->month/$this->year<br>";
    }


}