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

        $data = array(
            'id'=>$request->id,
            'name'=>$user,
            'description'=>$description,
            'coin'=>$coin,
            'title'=>$title
        );

        return View('updateProfile', ['data' => $data]);
    }
    
    
    public function updateProfile(Request $request){ 
        
        $request->validate(['name','description']);

        $user_name=User::select('*')->where('id','=',$request->id)->update(['name'=>$request->name]);

        $user_description=UserProfile::select('*')->where('users_id','=',$request->id)->update(['description'=>$request->description]);;
        
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

        $data = array(
            'id'=>$request->id,
            'name'=>$user,
            'description'=>$description,
            'coin'=>$coin,
            'title'=>$title
        );
        
        return redirect('/');
        
    }
}
