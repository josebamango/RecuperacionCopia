<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

/**
 * Class Animal
 * @package App\Models
 * @property string $especie
 * @property string $peso
 * @property string $altura
 * @property string $fechaNacimiento
 * @property string $imagen
 * @property string $alimentacion
 * @property string $descripcion
 *
 */
class Animal extends Model
{
    protected $table = "Animales";
    use HasFactory;

    public function getEdad()
    {
        $fechaFormateada = Carbon::parse($this->fechaNacimiento);
        return $fechaFormateada->diffInYears(Carbon::now());
    }
}
