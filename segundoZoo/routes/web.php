<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\InicioController;
use App\Http\Controllers\SoapServerController;
use App\Http\Controllers\RestWebServiceController;

Route::get('/', [InicioController::class, "home"])->name("animales.home");

Route::get('animales', [AnimalController::class, "index"])->name("animales.index");

Route::get('animales/crear', [AnimalController::class, "create"])->name("animales.create");

Route::get('animales/{animal}', [AnimalController::class, "show"])->name("animales.show");

Route::get('animales/{animal}/editar', [AnimalController::class, "edit"])->name("animales.edit");

Route::post('animales/store', [AnimalController::class, "store"])->name("animales.store");

Route::put('animales/{animal}', [AnimalController::class, 'update'])->name("animales.update");



/*Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::any('api', [SoapServerController::class, "getServer"])->name("api");

Route::any('api/wsdl', [SoapServerController::class, "getWSDL"])->name("api.wsdl");

Route::get('rest', [RestWebServiceController::class, "index"])->name("rest.index");

Route::get('rest/{animal}', [RestWebServiceController::class, "show"])->name("rest.show");

Route::delete('rest/{animal/borrar}',[RestWebServiceController::class, "destroy"])->name("rest.destroy");

Route::post('rest//insertar', [RestWebServiceController::class, "store"])->name("rest.store");*/
