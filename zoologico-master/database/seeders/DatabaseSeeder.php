<?php

namespace Database\Seeders;

use App\Models\Cuidador;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table("cuidadores")->delete();
        DB::table("animales")->delete();
        DB::table("users")->delete();
        DB::table("revisiones")->delete();
        Cuidador::factory(20)->create();
        $this->call(AnimalSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(RevisionSeeder::class);

    }
}
