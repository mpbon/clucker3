<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::post('/add', 'PlaylistController@addSong');

Route::get('/songs', 'PlaylistController@index');

Route::post('/delete', 'PlaylistController@removeSong');

Route::post('/like', 'PlaylistController@likeSong');
