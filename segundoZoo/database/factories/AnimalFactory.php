<?php

namespace Database\Factories;

use App\Models\Animal;
use Illuminate\Database\Eloquent\Factories\Factory;

class AnimalFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Animal::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "peso"=>$this->faker->numberBetween(0,150000),
            "altura"=>$this->faker->numberBetween(0,10000),
            "fechaNacimiento"=>$this->faker->date(),
            "especie"=>$this->faker->sentence(),
            "imagen"=>$this->faker->email(),
            "alimentacion"=>$this->faker->randomElement(["carnivoro","herbivoro"]),
            "descripcion"=>$this->faker->paragraph(),
        ];
    }
}
