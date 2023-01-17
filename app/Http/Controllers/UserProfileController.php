<?php

namespace App\Http\Controllers;

use App\Models\UserProfile;
use App\Models\User;
use App\Http\Requests\StoreUserProfileRequest;
use App\Http\Requests\UpdateUserProfileRequest;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    public function profile(Request $request){

        $users=User::select('name')->where('id','=',$request->id)->get();
        foreach($users as $user){
        $user= $user->name;
        }

        $userProfile=UserProfile::select('*')->where('users_id','=',$request->id)->get();
        foreach ($userProfile as $info ) {
            $description= $info->description;
            $coin = $info->coin;
            $title = $info->title;
        }
        $user_data = array(
            'id'=>$request->id,
            'name'=>$user,
            'description'=>$description,
            'coin'=>$coin,
            'title'=>$title
        );
        return View('profile', ['user_data' => $user_data]);
        
    }
    
    public function editProfile(Request $request){
        $data=User::select('*')->where('id','=',$request->id)->get();
        $data=UserProfile::select('*')->where('users_id','=',$request->id)->get();
        return View('updateProfile', ['data' => $data]);
    }
    
    
    public function updateProfile(Request $request){ // utilise l'objet Request ( voir à $_REQUEST)
        // recherche 'LE' produit par son id ( reccuperer dans le Request)
        $data=User::select('*')->where('id','=',$request->id)->get();
        $data=UserProfile::select('*')->where('users_id','=',$request->id)->get();
       
        //dd($request->name);
        
        // recherche les contenues des input
        $request->validate(['name','description']);
        
        // indique l'emplacement de chaque valeur de l'input dans la table data
        $data->name=$request->name; // stock le contenue de l'input name dans la colone name 
        $data->description= $request->description;// stock le contenue de l'input name dans la colone description 
        
        // sauvegarde la modification
        $data->save();
        
        // redirige vers la route '/'
        return redirect('profile');
        
    }
}
