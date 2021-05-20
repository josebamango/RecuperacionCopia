<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RestWebServiceController extends Controller
{
    public function index()
    {
        return response()->json(Animal::all());
    }

    public function show(Animal $animal)
    {
        return response()->json($animal);
    }

    public function destroy(Animal $animal)
    {

        try {
            Animal::query()->where("slug", $animal->slug)->delete();
            return response()->json(["mensaje" => "Eliminado con exito"]);
        } catch (\Exception $e) {
            return response()->json(["mensaje" => "Error al eliminar"]);
        }
    }

    public function store(Request $request)
    {
        try {
            $animal = new Animal();
            $animal->especie = $request->especie;
            $animal->slug = Str::slug($request->especie);
            $animal->peso = $request->peso;
            $animal->altura = $request->altura;
            $animal->fechaNacimiento = $request->fechaNacimiento;
            $animal->alimentacion = $request->alimentacion;
            $animal->descripcion = $request->descripcion;
            $animal->save();
            return response()->json(["mensaje" => "Guardado con exito"]);
        } catch (\Exception $e) {
            return response()->json(["mensaje" => "Error al guardar"]);
        }
    }
}
