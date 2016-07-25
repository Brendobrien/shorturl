var express = require('express');
var app = express();

// home
app.get('/api/whoami', function (req, res) {
  var head = req.headers;
  var leftP = head['user-agent'].indexOf('(')+1;
  var rightP = head['user-agent'].indexOf(')');
  var response = {
      "ipaddress":head['x-forwarded-for'],
      "language":head['accept-language'].substring(0,5),
      "software":head['user-agent'].substring(leftP,rightP)
  };
  
  res.send(JSON.stringify(response));
});

// in case go to the wrong link
app.get('/', function (req, res) {
    res.send('<a href="./api/whoami">Go Here Instead</a>');
});

// listen
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});
