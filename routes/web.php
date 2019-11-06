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

Route::post('/add', 'CluckController@addCluck');

Route::get('/clucks', 'CluckController@index');

Route::post('/delete', 'CluckController@removeCluck');

Route::post('/like', 'CluckController@likeCluck');

Route::get('/welcome', function () {
    return view('welcome');
    });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/logout', function(){
    Auth::logout();
    return redirect('/login');
})->name('logout');

Route::get('/home', function(){
    return redirect('/');})->name('home');
