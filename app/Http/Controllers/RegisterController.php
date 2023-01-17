<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;
use App\Models\UserProfile;

class RegisterController extends Controller
{
    public function AddUser(Request $request){
        $user = new User;
        $request->validate(['name','email'=>'required|email','password'=>'required|alphaNum|min:8']);
        $user->name= $request->name; 
        $user->email= $request->email;
        $user->password= Crypt::encryptString($request->password);
        $user->role= "user";
        $user->save();

        $ids= User::select('id')->where('email','=',$user->email)->get();

        foreach($ids as $id){
            $id=$id->id;
        }

        $profile = new UserProfile;
        $profile->users_id= $id; // stock le contenue de l'input name dans la colone name 
        $profile->description= "";// stock le contenue de l'input name dans la colone prix_ht 
        $profile->coin= 0;// stock le contenue de l'input name dans la colone description 
        $profile->title= "beginner";
        $profile->save();
        
        return redirect('/');
    }
    
    public function Register(){
        return View('register');
    }
}
