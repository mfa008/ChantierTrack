<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request){
        return response()->json([
            'email' => $request->email
        ]);
    }
}
