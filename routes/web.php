<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
   return Inertia::render('Welcome');
})->name('welcome');

Route::get('/login', function () {
   return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
   return Inertia::render('Auth/Register');
})->name('register');

Route::get('/forgotpassword', function () {
   return Inertia::render('Auth/ForgotPassword');
})->name('forgotpassword');

Route::get('/resetpassword', function () {
   return Inertia::render('Auth/ResetPassword');
})->name('resetpassword');

Route::get('/confirmpassword', function () {
   return Inertia::render('Auth/ConfirmPassword');
})->name('confirmpassword');

Route::get('/verifyemail', function () {
   return Inertia::render('Auth/VerifyEmail');
})->name('verifyemail');
