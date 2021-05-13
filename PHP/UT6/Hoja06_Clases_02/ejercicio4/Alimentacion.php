<?php

class Alimentacion extends Productos
{
    private $mes_caducidad, $año_caducidad;

    /**
     * Alimentacion constructor.
     * @param $mes_caducidad
     * @param $año_caducidad
     */
    public function __construct($codigo, $precio, $nombre, $mes_caducidad, $año_caducidad)
    {
        parent::__construct($codigo, $precio, $nombre);
        $this->mes_caducidad = $mes_caducidad;
        $this->año_caducidad = $año_caducidad;
    }

    /**
     * @return mixed
     */
    public function getMesCaducidad()
    {
        return $this->mes_caducidad;
    }

    /**
     * @param mixed $mes_caducidad
     */
    public function setMesCaducidad($mes_caducidad)
    {
        $this->mes_caducidad = $mes_caducidad;
    }

    /**
     * @return mixed
     */
    public function getAñoCaducidad()
    {
        return $this->año_caducidad;
    }

    /**
     * @param mixed $año_caducidad
     */
    public function setAñoCaducidad($año_caducidad)
    {
        $this->año_caducidad = $año_caducidad;
    }

    /**
     * @return mixed
     */
    public function getCodigo()
    {
        return $this->codigo;
    }

    /**
     * @param mixed $codigo
     */
    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;
    }

    /**
     * @return mixed
     */
    public function getPrecio()
    {
        return $this->precio;
    }

    /**
     * @param mixed $precio
     */
    public function setPrecio($precio)
    {
        $this->precio = $precio;
    }

    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function __toString()
    {
        return parent::__toString() ." caduca el mes: " . $this->mes_caducidad . " del: ". $this->año_caducidad ."<br>";
    }

}