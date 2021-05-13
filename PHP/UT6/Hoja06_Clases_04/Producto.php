<?php
require_once "Categoria.php";

class Producto
{
    protected $codigo, $precio, $nombre, $categoria;

    /**
     * Producto constructor.
     * @param $codigo
     * @param $precio
     * @param $nombre
     * @param $categoria
     */
    public function __construct($codigo, $precio, $nombre, Categoria $categoria)
    {
        $this->codigo = $codigo;
        $this->precio = $precio;
        $this->nombre = $nombre;
        $this->categoria = $categoria;
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

    public function setCategoria(Categoria $categoria): void
    {
        $this->categoria = $categoria;
    }

    /**
     * @return mixed
     */
    public function getCategoria()
    {
        return $this->categoria;
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

    public function __toString(): String
    {
        return "Codigo: $this->codigo, Precio: $this->precio, Nombre: $this->nombre, Categoria: ". $this->getCategoria();
    }


}