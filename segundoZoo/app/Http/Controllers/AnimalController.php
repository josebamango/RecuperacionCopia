<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function index()
    {
        $animales = Animal::all();
        return view("animales.index", compact("animales"));
    }

    public function create()
    {
        return view("animales.create");
    }

    public function show(Animal $animal)
    {
        return view("animales.show", compact("animal"));
    }

    public function edit(Animal $a)
    {
        $animal = Animal::find($a);
        return view("animales.edit", compact("animal"));
    }
}
