'use strict';

var urls = require('../models/urlDB.js');
var counter = require('../models/counterDB.js');

function shortUrlHandler() {
  this.handleShortUrl = function(req,res){
    //  urls
    //     .findOne({'original_url':req.shortUrl})
  }

  this.addShortUrl = function(req,res){
    //  urls
    //     .findOneAndUpdate();
  }
}

module.exports = shortUrlHandler;
