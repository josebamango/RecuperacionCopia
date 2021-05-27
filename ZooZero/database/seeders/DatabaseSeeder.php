<?php

namespace Database\Seeders;

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
        DB::table('users')->delete();
        $this->call(UserSeeder::class);
        DB::table('animales')->delete();
        $this->call(AnimalSeeder::class);

    }


}
