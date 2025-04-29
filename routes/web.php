<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
   return Inertia::render('Welcome');
})->name('welcome');

Route::get('/confirmpassword', function () {
   return Inertia::render('Auth/ConfirmPassword');
})->name('confirmpassword');

Route::get('/verifyemail', function () {
   return Inertia::render('Auth/VerifyEmail');
})->name('verifyemail');

Route::get('/dashboard', function () {
   return Inertia::render('Dashboard');
})->name('dashboard');
 
require __DIR__.'/auth.php';