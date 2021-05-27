<?php

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

Route::get('/', [InicioController::class, "home"])->name("animales.home");

Route::get('animales', [AnimalController::class, "index"])->name("animales.index");

Route::get('animales/crear', [AnimalController::class, "create"])->name("animales.create");

Route::get('animales/{animal}/editar', [AnimalController::class, "edit"])->name("animales.edit");

Route::get("animales/{animal}", [AnimalController::class, "show"])->name("animales.show");

Route::post("animales", [AnimalController::class, "store"])->name("animales.store");

Route::put("animales/{animal}", [AnimalController::class, "update"])->name("animales.update");
