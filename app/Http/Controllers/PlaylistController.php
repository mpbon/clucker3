<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Song;

class PlaylistController extends Controller
{
    public function index(){
        $songs = Song::all();
        return $songs->toJson();
    }

    public function addSong(Request $request){
        $song = new Song;
        $song->title = $request->title;
        $song->save();
    }

    public function removeSong(Request $request)
    {
        Song::destroy($request->id);
    }

    public function likeSong(Request $request)
    {
        $song = Song::find($request->id);
        $song->liked = !$song->liked;
        $song->save();
    }
}
