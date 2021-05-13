<?php


class Categoria
{
    private $id, $nombre;

    /**
     * Categoria constructor.
     * @param $id
     * @param $nombre
     */
    public function __construct($id, $nombre)
    {
        $this->id = $id;
        $this->nombre = $nombre;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
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



    public function __toString(): String
    {
        return "ID: $this->id, Nombre: $this->nombre";
    }


}