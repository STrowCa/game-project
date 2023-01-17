<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SkinPriceController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\GameController;

use App\Models\SkinPrice;

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

Route::get('game/{id}', [GameController::class, 'data'])->name('game');

Route::get('/home', [LoginController::class, "index"])->name('login');
Route::post('/connected', [LoginController::class, 'verifLogin'])->name('connect');

Route::get('/register',[RegisterController::class, 'register'])->name('register');
Route::post('/AddUser',[RegisterController::class, 'AddUser'])->name('AddUser');


Route::get('/profile/{id}',[UserProfileController::class, 'profile'])->name('Profile');

Route::get('/edit_profile/{id}',[UserProfileController::class, 'editProfile'])->name('editProfile');
Route::post('/update_profile/{id}',[UserProfileController::class, 'updateProfile'])->name('updateProfile');


Route::get('/',[SkinPriceController::class, 'index'])->name('homepage');

Route::get('/edit/{id}',[SkinPriceController::class, 'edit'])->name('edit');
Route::post('/update/{id}',[SkinPriceController::class, 'update'])->name('updated_prduct');

Route::get('/new',[SkinPriceController::class, 'addProduct'])->name('add_new_prduct');
Route::post('/add',[SkinPriceController::class, 'add'])->name('add_prduct');

Route::get('/delete/{id}',[SkinPriceController::class, 'delete'])->name('delete');