<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
Route::get('/test', [PostController::class, 'test']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
