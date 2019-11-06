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

Route::post('/add', 'PlaylistController@addCluck');

Route::get('/clucks', 'PlaylistController@index');

Route::post('/delete', 'PlaylistController@removeCluck');

Route::post('/like', 'PlaylistController@likeCluck');
