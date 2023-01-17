<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserProfile;
use App\Models\User;



class GameController extends Controller
{
    public function data(Request $request) {
    $id=$request->id;
    

    return view('test', ['id' => $id]);
}}
