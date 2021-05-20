<?php

use App\Http\Controllers\RestWebServiceController;
use App\Http\Controllers\RevisionController;
use App\Http\Controllers\SoapServerController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InicioController;
use App\Http\Controllers\AnimalController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [InicioController::class, "inicio"])
    ->name("home");

Route::get("animales", [AnimalController::class, "index"])
    ->name("animales.index");

Route::post("animales", [AnimalController::class, "store"])
    ->name("animales.store");

Route::get("animales/crear", [AnimalController::class, "create"])
    ->name("animales.create")
    ->middleware("auth");

Route::get("animales/{animal}", [AnimalController::class, "show"])
    ->name("animales.show");

Route::put("animales/{animal}", [AnimalController::class, "update"])
    ->name("animales.update");

Route::get("animales/{animal}/editar", [AnimalController::class, "edit"])
    ->name("animales.edit")
    ->middleware("auth");

Route::get("revisiones/{animal}/crear", [RevisionController::class, "create"])
    ->name("revisiones.create");

Route::post("revisiones", [RevisionController::class, "store"])
    ->name("revisiones.store");

// API SOAP

Route::any("api", [SoapServerController::class, "getServer"])
    ->name("api.getServer");

Route::any("api/wsdl", [SoapServerController::class, "getWSDL"])
    ->name("api.getWSDL");

// API REST
Route::get("rest", [RestWebServiceController::class, "index"])
    ->name("rest.index");

Route::get("rest/{animal}", [RestWebServiceController::class, "show"])
    ->name("rest.show");

Route::delete("rest/{animal}/borrar", [RestWebServiceController::class, "destroy"])
    ->name("rest.delete");

Route::post("rest/insertar", [RestWebServiceController::class, "store"])
    ->name("rest.store");

//AJAX
Route::post("animales/busquedaAjax", [AnimalController::class, "buscar"])
    ->name("busquedaAjax");

// JETSTREAM USUARIOS
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
