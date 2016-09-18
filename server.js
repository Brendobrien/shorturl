'use strict';

// import Packages
const express = require('express'),
  routes = require('./app/routes/index.js'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');

// get the app, variables, and db running
var app = express();
require('dotenv').load();
mongoose.connect(process.env.MONGO_URI);

// Routes
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('json spaces', 2);

// mount middleware and routes
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
routes(app);

app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// listen
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Shorturl listening on port '+port);
});
