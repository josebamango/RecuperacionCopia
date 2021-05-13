<?php
require_once "Producto.php";

class Alimentacion extends Producto
{
    private $mesCaducidad, $anioCaducidad;

    /**
     * Alimentacion constructor.
     * @param $codigo
     * @param $precio
     * @param $nombre
     * @param $categoria
     * @param $mesCaducidad
     * @param $anioCaducidad
     */

    public function __construct($codigo, $precio, $nombre,$categoria, $mesCaducidad, $anioCaducidad)
    {
        parent::__construct($codigo, $precio, $nombre, $categoria);
        $this->mesCaducidad = $mesCaducidad;
        $this->anioCaducidad = $anioCaducidad;
    }

    /**
     * @return mixed
     */
    public function getMesCaducidad()
    {
        return $this->mesCaducidad;
    }

    /**
     * @param mixed $mesCaducidad
     */
    public function setMesCaducidad($mesCaducidad): void
    {
        $this->mesCaducidad = $mesCaducidad;
    }

    /**
     * @return mixed
     */
    public function getAnioCaducidad()
    {
        return $this->anioCaducidad;
    }

    /**
     * @param mixed $anioCaducidad
     */
    public function setAnioCaducidad($anioCaducidad): void
    {
        $this->anioCaducidad = $anioCaducidad;
    }

    public function __toString(): String
    {
        return parent::__toString() . ", Mes Caducidad: $this->mesCaducidad, Año Caducidad: $this->anioCaducidad";
    }


}