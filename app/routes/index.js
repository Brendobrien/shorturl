'use strict';

var path = process.cwd();
var shortUrlHandler = require(path + '/app/controllers/shortUrlHandler.server.js');

module.exports = function (app) {

    var shortUrlHandler = new shortUrlHandler();
    
    app.route('/')
        .get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/:shortUrl')
        .get(shortUrlHandler.handleshortUrl);
    
    app.route('/new/*?')
        .get(shortUrlHandler.addShortUrl)
}