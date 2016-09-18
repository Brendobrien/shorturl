'use strict';

var ShortUrlHandler = require(process.cwd() + '/app/controllers/shortUrlHandler.server.js');

module.exports = function (app) {
  var shortUrlHandler = new ShortUrlHandler();

  app.route('/')
  .get((req, res)=> res.sendFile(process.cwd() + '/public/index.html'));

  app.route('/urls')
    .get(shortUrlHandler.getUrls);

  app.route('/:shurl')
    .get(shortUrlHandler.handleShortUrl);

  app.route('/new/*?')
  	.get(shortUrlHandler.addShortUrl);
};