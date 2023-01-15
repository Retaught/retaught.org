<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class AppController extends Controller
{
    /**
     * Display App Home page .
     *
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('Home');
    }
}
