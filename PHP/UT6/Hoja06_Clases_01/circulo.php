<?php


class Circulo
{
    private $radio;

    /**
     * Circulo constructor.
     * @param $radio
     */
    public function __construct($radio)
    {
        $this->radio = $radio;
    }

    /*public function getRadio()
    {
        return $this->radio;
    }

    public function setRadio($radio): void
    {
        $this->radio = $radio;
    }*/

    public function __set($name, $value)
    {
        if (property_exists(__CLASS__, $name)) {
            $this->$name = $value;
        } else {
            echo "Error no existe $name";
        }
    }
    public function __get($name)
    {
        if (property_exists(__CLASS__, $name)) {
            return $this->$name;
        } else {
            echo null;
        }
    }


}