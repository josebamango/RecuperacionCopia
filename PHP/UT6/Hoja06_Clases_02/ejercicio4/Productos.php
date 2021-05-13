<?php


class Productos
{
protected $codigo, $precio, $nombre;

    /**
     * Productos constructor.
     * @param $codigo
     * @param $precio
     * @param $nombre
     */
    public function __construct($codigo, $precio, $nombre)
    {
        $this->codigo = $codigo;
        $this->precio = $precio;
        $this->nombre = $nombre;
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
        return "<strong>El producto con código: " . $this->codigo . " es " . $this->nombre . " y cuesta-> " . $this->precio . "€</strong>";
    }
}