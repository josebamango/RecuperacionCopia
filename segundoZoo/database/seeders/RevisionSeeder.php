<?php

namespace Database\Seeders;

use App\Models\Animal;
use App\Models\Revision;
use Illuminate\Database\Seeder;

class RevisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $revision = new Revision();
        $revision->fecha = "2020-01-28";
        $revision->descripcion = "Descripcion de la revision";
        $revision->animal_id = Animal::all()->first()->id;
        $revision->save();

        $revision = new Revision();
        $revision->fecha = "2021-01-28";
        $revision->descripcion = "Descripcion de la revision2";
        $revision->animal_id = Animal::all()->first()->id;
        $revision->save();
    }
}
