<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

/**
 * Class Animal
 *
 * @property string $especie
 * @property string $altura
 * @property string $peso
 * @property string $alimentacion
 * @property string $fechaNacimiento
 * @property string $descripcion
 */
class Animal extends Model
{
    use HasFactory;

    protected $table = "animales";
    public $timestamps = false;
    protected $guarded = [];

    public function revisiones()
    {
        return $this->hasMany(Revision::class);
    }

    public function cuidadores()
    {
        return $this->belongsToMany(Cuidador::class);
    }

    public function getEdad(): int
    {
        $fechaFormateada = Carbon::parse($this->fechaNacimiento);
        return $fechaFormateada->diffInYears(Carbon::now());
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
