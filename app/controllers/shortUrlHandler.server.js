'use strict';

var urls = require('../models/urlDB.js');
var counter = require('../models/counterDB.js');

function shortUrlHandler() {
	this.getUrls = function(req,res) {
	    urls.find((err, users) => {
	        if (err) throw error;

	        res.json(users); // return all users in JSON format
	    });
	};

  this.handleShortUrl = function(req,res){
    urls.find({short_url: req.params.shurl}, (err, x)=>res.redirect('http://www.google.com'))
  }

  this.addShortUrl = function(req,res){
    getCounter((i)=>res.json(i));
  }
}

function getCounter(callback) {
	counter.findOneAndUpdate({}, {$inc: {cnt: 1}}, {"new": true}, (err, i) => {
    	if(err) throw err;
    	if (i) callback(i);
    	else {
    		counter.create({cnt: 1}, function (err, i) {
		        if (err) throw error;
		        callback(i);
		    })
		}
    });
}

module.exports = shortUrlHandler;