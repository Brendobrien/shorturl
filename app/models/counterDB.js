'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var counter = new Schema({
	cnt: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('counter', counter);
