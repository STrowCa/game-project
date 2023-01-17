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
        return View('main', ['skins' => $skins]);
        
    }
    
    public function edit(Request $request){
        
        $skin = SkinPrice::find($request -> id);
        return View('update', ['skin' => $skin]);
    }
    
    
    public function update(Request $request){ // utilise l'objet Request ( voir à $_REQUEST)
        // recherche 'LE' produit par son id ( reccuperer dans le Request)
        $skin = SkinPrice::find($request -> id);
       
        //dd($request->name);
        
        // recherche les contenues des input
        $request->validate(['name','prix','description']);
        
        // indique l'emplacement de chaque valeur de l'input dans la table skin
        $skin->name=$request->name; // stock le contenue de l'input name dans la colone name 
        $skin->prix_ht= $request->prix;// stock le contenue de l'input name dans la colone prix_ht 
        $skin->description= $request->description;// stock le contenue de l'input name dans la colone description 
        
        // sauvegarde la modification
        $skin->save();
        
        // redirige vers la route '/'
        return redirect('/');
        
    }
    
    
    public function add(Request $request){
        $skin = new SkinPrice;
        $request->validate(['name','prix','description']);
        $skin->name= $request->name; // stock le contenue de l'input name dans la colone name 
        $skin->prix_ht= $request->prix;// stock le contenue de l'input name dans la colone prix_ht 
        $skin->description= $request->description;// stock le contenue de l'input name dans la colone description 
        $skin->save();
        return redirect('/');
    }
    
    public function addProduct(){
        return View('add');
    }
    
    public function delete(Request $request){
        $skin = SkinPrice::find($request -> id);
        $skin->delete();
       return redirect('/');
    }
}
