'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shortUrl = new Schema({
    original_url: String,
    short_url:String
});

module.exports = mongoose.model('shortUrl', shortUrl);