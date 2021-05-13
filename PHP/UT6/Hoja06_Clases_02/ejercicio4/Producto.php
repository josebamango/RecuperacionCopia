<?php


abstract class Producto
{
    protected $codigo;
    protected $precio;
    protected $nombre;

    /**
     * Producto constructor.
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
    public function setCodigo($codigo): void
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
    public function setPrecio($precio): void
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
    public function setNombre($nombre): void
    {
        $this->nombre = $nombre;
    }

    public function __toString()
    {
        return "Codigo: $this->codigo, Precio: $this->precio, Nombre: $this->nombre";
    }

}