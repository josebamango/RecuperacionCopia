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

    public function store(Request $a)
    {

        $animal = new Animal();
        $animal->especie = $a->especie;
        $animal->peso = $a->peso;
        $animal->altura = $a->altura;
        $animal->fechaNacimiento = $a->fechaNacimiento;
        $animal->alimentacion = $a->alimentacion;
        $animal->descripcion = $a->descripcion;
        $animal->imagen = $a->imagen;
        $animal->save();

        return redirect()->route('animales.show', $animal);
    }

    public function update(Request $a, int $id)
    {
        $animal=Animal::find($id);
        $animal->especie = $a->especie;
        $animal->peso = $a->peso;
        $animal->altura = $a->altura;
        $animal->fechaNacimiento = $a->fechaNacimiento;
        $animal->alimentacion = $a->alimentacion;
        $animal->descripcion = $a->descripcion;
        if ($a->imagen !== null) {
            $animal->imagen = $a->imagen->storeAs("", $a->imagen->getClientOriginalName());
        }
        $animal->save();

        return redirect()->route('animales.index');
    }
}
