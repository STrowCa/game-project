<?php

namespace App\Http\Controllers;

use App\Models\SkinPrice;
use App\Http\Requests\StoreSkinPriceRequest;
use App\Http\Requests\UpdateSkinPriceRequest;
use Illuminate\Http\Request;

class SkinPriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){

        $skins= SkinPrice::all();

        return View('adminPage', ['skins' => $skins]);
        
    }
    
    public function editSkin(Request $request){
        
        $skin = SkinPrice::find($request -> id);

        return View('updateSkin', ['skin' => $skin]);
    }
    
    
    public function updateSkin(Request $request){ 

        $skin = SkinPrice::find($request -> id);
       
        $request->validate(['name','prix','description']);
        
        $skin->name=$request->name; 
        $skin->prix_ht= $request->prix;
        $skin->description= $request->description;
        $skin->save();
        
        return redirect('/admin');
        
    }
    
    
    public function addedSkin(Request $request){

        $skin = new SkinPrice;

        $request->validate(['name','prix','description']);

        $skin->name= $request->name; 
        $skin->prix_ht= $request->prix;
        $skin->description= $request->description;
        $skin->save();

        return redirect('/admin');
    }
    
    public function addSkin(){
        return View('addSkin');
    }
    
    public function deleteSkin(Request $request){

        $skin = SkinPrice::find($request -> id);
        $skin->delete();
        
        return redirect('/admin');
    }
}
