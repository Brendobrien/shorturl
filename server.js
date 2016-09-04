'use strict';

// import Packages
const express = require('express'),
 routes = require('./app/routes/index.js'),
 mongoose = require('mongoose');

// get the app, variables, and db running
var app = express();
require('dotenv').load();
mongoose.connect(process.env.MONGO_URI);

// mount middleware and routes
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
routes(app);

// 404 safety blanket
// never give up on your dreams!
// keep calm and keep making GitHub think your sending git commits
// when really your just making comments and using codepen
// alright I promise this is the last one
// one more
// last one
// and another because I'm curious about a push problem
// last last one
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// listen
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Shorturl listening on port '+port);
});
