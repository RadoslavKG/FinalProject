/**
 * Created by 1 on 16.12.2016 г..
 */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require ('express-session');
const passport = require('passport');

module.exports = (app, config) => {
// view engine setup
    app.set('views', path.join(config.rootFolder, '/views'));
    app.set('view engine', 'hbs');

//this set up which is the parser for the request's data.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

//we will use cookies
    app.use(cookieParser());

//storage for cookies(sessi1ngon), which will be de/encrypted with 'secret' key.
    app.use(session({secret: 's3cr3t5tr1ng', resave: false, saveUninitialized: false}));

//for user validation we will use passport module.
    app.use(passport.initialize());
    app.use(passport.session());

//this makes the content in the "public" folder accessible for every user.
    app.use(express.static(path.join(config.rootFolder, 'public')));
};