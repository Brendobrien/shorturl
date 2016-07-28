'use strict';

var urls = require('../models/urlDB.js');

function shortUrlHandler() {
 this.handleShortUrl = function(req,res){
    console.log('handling short url');
    //  urls
    //     .findOne({'original_url':req.shortUrl})
 }
 
 this.addShortUrl = function(req,res){
    console.log('adding short url');
    //  urls
    //     .findOneAndUpdate();
 }
}

module.exports = shortUrlHandler;