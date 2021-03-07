<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Property;
use App\Photo;

class PropertyController extends Controller
{

    public function store(Request $request)
    {

        // dd($this->generateRandomString());
        // dd($request->all()); 

        $property = new Property();
        
        $property->title = $request->title; 
        $property->description = $request->description; 
        $property->city = $request->city; 
        $property->country = $request->country; 
        $property->available_start_date = $request->available_start_date; 
        $property->available_end_date = $request->available_end_date; 
        $property->type = $request->type; 
        $property->owner_id = Auth::id();

        $saved = $property->save();


        if ($saved) {
            if ($request->hasfile('photos')) {
                foreach ($request->file('photos') as $file) {
                    $name = $this->generateRandomString() ."-". $file->getClientOriginalName() ;
                    $file->move(public_path() . '/property/', $name);
                    $img_path = '/property/'. $name;
                    $photo = new Photo();
                    $photo->img_path = $img_path;
                    $photo->save();
                }
            }
        }

        return response()->json([
            'message' => 'Property Added Successfully',
            'property' => $property,
        ]);
    }

    function generateRandomString($length = 20) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
