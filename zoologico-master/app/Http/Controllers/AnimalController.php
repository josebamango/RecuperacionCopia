<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View|Response
     */
    public function index()
    {
        $animales = Animal::all();
        return view("animales.index", compact("animales"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View|Response
     */
    public function create()
    {

        return view("animales.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Application|Factory|View|Response|RedirectResponse
     */
    public function store(Request $request)
    {

        try {
            $arrayDatos = $request->all();
            $arrayDatos["slug"] = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->especie)));
            if ($request->imagen !== null) {
                $arrayDatos["imagen"] = $request->imagen->storeAs("img", $request->imagen->getClientOriginalName());
            }
            Animal::create($arrayDatos);
            //
            /*$animal = new Animal();
            $animal->especie = $request->especie;
            $animal->peso = $request->peso;
            $animal->altura = $request->altura;
            $animal->fechaNacimiento = $request->fechaNacimiento;
            $animal->alimentacion = $request->alimentacion;
            $animal->descripcion = $request->descripcion;
            if ($request->imagen !== null) {
                $animal->imagen = $request->imagen->storeAs("img", $request->imagen->getClientOriginalName());
            }
            $animal->save();*/
            //
            $mensaje = "Todo correcto";
            $animal = Animal::all()->last();
            return redirect()->action([AnimalController::class, "show"], ["id" => $animal])->with("mensaje", $mensaje);
        } catch (\Exception $e) {
            $mensaje = "Error: " . $e->getMessage();
            return redirect()->action([AnimalController::class, "index"])->with("mensaje", $mensaje);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param Animal $animal
     * @return Application|Factory|View|Response
     */
    public function show(Animal $animal)
    {
        return view("animales.show", compact("animal"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Animal $animal
     * @return Application|Factory|View|Response
     */
    public function edit(Animal $animal)
    {
        return view("animales.edit", compact("animal"));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Application|Factory|View|Response|RedirectResponse
     */
    public function update(Request $request, Animal $animal)
    {
        $animal->especie = $request->especie;
        $animal->slug = Str::slug($animal->especie);
        $animal->peso = $request->peso;
        $animal->altura = $request->altura;
        $animal->fechaNacimiento = $request->fechaNacimiento;
        $animal->alimentacion = $request->alimentacion;
        $animal->descripcion = $request->descripcion;
        if ($request->imagen !== null) {
            $animal->imagen = $request->imagen->storeAs("", $request->imagen->getClientOriginalName());

        }
        $animal->save();
        return redirect()->action([AnimalController::class, "show"], compact("animal"));
    }

    public function buscar(Request $request)
    {
        $texto = "%" . $request->busqueda . "%";
        $animales = Animal::query()->where("especie", "like", $texto)->pluck("especie");
        return response()->json($animales);
    }
}
