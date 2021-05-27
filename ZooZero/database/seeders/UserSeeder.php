<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $usuario = new User();
        $usuario->name = "Joseba";
        $usuario->email = "josebamsmsa@gmail.com";
        $usuario->password = bcrypt("123");
        $usuario->save();
    }
}
