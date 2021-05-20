<?php

namespace Database\Factories;

use App\Models\Cuidador;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CuidadorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cuidador::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $nombre = $this->faker->firstName;
        return [
            "nombre" => $nombre,
            "slug" => Str::slug($nombre),
        ];
    }
}
