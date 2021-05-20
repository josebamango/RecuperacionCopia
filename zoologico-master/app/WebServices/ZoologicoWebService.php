<?php


namespace App\WebServices;


use App\Models\Animal;
use App\Models\User;

class ZoologicoWebService
{
    /**
     * @param string $email
     * @param string $password
     * @return bool
     */
    public function login(string $email, string $password)
    {
        $passBD = User::query()->where("email", $email)->password;
        return $password === $passBD;
    }

    /**
     * @param int $id
     * @return App\Models\Animal
     */
    public function getAnimal(int $id)
    {
        return Animal::findOrFail($id);
    }

    /**
     * @return App\Models\Animal[]
     */
    public function getAnimales()
    {
        return Animal::all();
    }

    /**
     * @param string $alimentacion
     * @return App\Models\Animal[]
     */
    public function getAnimalesAlimentacion(string $alimentacion)
    {
        return Animal::where("alimentacion", $alimentacion)->get();
    }

    /**
     * @param string $slug
     * @return App\Models\Animal[]
     */
    public function busqueda($slug)
    {
        $busqueda = "%".$slug."%";
        return Animal::where("slug", "like", $busqueda)->get();
    }
}
