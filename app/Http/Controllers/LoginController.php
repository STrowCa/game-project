<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Validator;
use Auth;

use Illuminate\Support\Facades\Crypt;

class LoginController extends Controller
{
    function index(){
        return view('login'); 
    }

    function verifLogin(Request $request){
       
        $this->validate($request, 
        [
            'email' => 'required|email',
            'password' => 'required|alphaNum|min:8'
        ]);

        $user_data = array(
            'email' => $request->get('email'),
            'password' => $request->get('password')
        );
        
        $ids= User::select('id')->get();
        foreach($ids as $id){
            
            $emails= User::select('email')->where('id','=',$id->id)->get();
            $passwords= User::select('password')->where('id','=',$id->id)->get();
            foreach($emails as $email){
            $email= $email->email;
            }
            foreach($passwords as $password){
            $password=$password->password;
            }
            
            
            if($user_data['email']==$email && $user_data["password"]==Crypt::decryptString($password)){
               
                $roles= User::select('role')->where('id','=',$id->id)->get();
                foreach($roles as $role){
                    $role= $role->role;
                    }
                    
                    
                    if($role=="user"){
                        return redirect()->route('game', ['id'=>$id]);
                    }
                    if($role=="admin"){
                        return Redirect('/');
                    }
                
        
            }
            
            
            
        }
            
    }}

    

