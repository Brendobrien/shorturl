'use strict';

var urls = require('../models/urlDB.js');
var counter = require('../models/counterDB.js');
var validator = require('validator');

function shortUrlHandler() {
	this.getUrls = function(req,res) {
	    urls.find((err, users) => {
	        if (err) throw err;

	        res.json(users);
	    });
	};

  this.handleShortUrl = function(req,res){
    console.log(req.params.shurl);
    urls.findOne({short_url: req.params.shurl}, (err, x)=>{
    	if(err) throw err;

    	if(x)
    		res.redirect(x.original_url)
    	else
    		res.json({"error":"that url ain't in the system bruh"})
	})
  }

  this.addShortUrl = function(req,res){
    getCounter((x)=>makeUrl(req,res,x.cnt));
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

function makeUrl(req,res,i) {
	// res.json(process.env.APP_URL+"/"+i);
	if(validator.isURL(req.params[0],{require_protocol: true}))
		urls.create({
			original_url: req.params[0],
	        short_url: i,
	    }, function (err, url) {
	        if (err) throw error;

	        res.json({
	        	original_url: url.original_url,
	        	short_url: process.env.APP_URL+"/"+url.short_url
	        });
	    });
	else
		res.json({"error":"i don't think that's a valid url, bruh. make sure u include ur protocol, bruh."})
}

module.exports = shortUrlHandler;