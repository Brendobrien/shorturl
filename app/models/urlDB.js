'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urls = new Schema({
    original_url: String,
    short_url: Number
});

module.exports = mongoose.model('urls', urls);