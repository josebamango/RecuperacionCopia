<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use App\Models\Revision;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RevisionController extends Controller
{
    /**
     * @param Animal $animal
     * @return Application|Factory|View
     */
    public function create(Animal $animal)
    {
        return view("revisiones.create", compact("animal"));
    }

    /**
     * @param Request $request
     * @param Animal $animal
     * @return RedirectResponse
     */
    public function store(Request $request)
    {
        $revision = new Revision();
        $revision->fecha = $request->fecha;
        $revision->descripcion = $request->descripcion;
        $revision->animal_id = $request->animal_id;
        $revision->save();

        return redirect()->action([AnimalController::class, "index"]);
    }
}
