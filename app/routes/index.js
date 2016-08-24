'use strict';

var ShortUrlHandler = require(process.cwd() + '/app/controllers/shortUrlHandler.server.js');

module.exports = function (app) {
   var shortUrlHandler = new ShortUrlHandler();
   shortUrlHandler.handleShortUrl('req','res');
   shortUrlHandler.addShortUrl();

   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });

//  app.route('/:shurl')
//     .get(shortUrlHandler.handleShortUrl);

//    app.route('/new/*?')
//       .get(shortUrlHandler.addShortUrl);
};
