<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cluck;

class PlaylistController extends Controller
{
    public function index(){
        $clucks = Cluck::all();
        return $clucks->toJson();
    }

    public function addCluck(Request $request){
        $cluck = new Cluck;
        $cluck->title = $request->title;
        $cluck->save();
    }

    public function removeCluck(Request $request)
    {
        Cluck::destroy($request->id);
    }

    public function likeCluck(Request $request)
    {
        $cluck = Cluck::find($request->id);
        $cluck->liked = !$cluck->liked;
        $cluck->save();
    }
}
