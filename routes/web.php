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

Route::get('/', [LoginController::class, "index"])->name('login');
Route::post('/connected', [LoginController::class, 'verifLogin'])->name('connect');

Route::get('/register',[RegisterController::class, 'register'])->name('register');
Route::post('/AddUser',[RegisterController::class, 'AddUser'])->name('AddUser');


Route::get('/profile/{id}',[UserProfileController::class, 'profile'])->name('Profile');

Route::get('/edit_profile/{id}',[UserProfileController::class, 'editProfile'])->name('editProfile');
Route::post('/update_profile/{id}',[UserProfileController::class, 'updateProfile'])->name('updateProfile');


Route::get('/admin',[SkinPriceController::class, 'index'])->name('adminPage');

Route::get('/editSkin/{id}',[SkinPriceController::class, 'editSkin'])->name('editSkin');
Route::post('/updateSkin/{id}',[SkinPriceController::class, 'updateSkin'])->name('updatedSkin');

Route::get('/newSkin',[SkinPriceController::class, 'addSkin'])->name('addSkin');
Route::post('/addSkin',[SkinPriceController::class, 'addedSkin'])->name('addedSkin');

Route::get('/deleteSkin/{id}',[SkinPriceController::class, 'deleteSkin'])->name('deleteSkin');