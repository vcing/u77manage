var express = require('express');
var app = express();

app.use('/static',express.static(__dirname + '/dest'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('dest/index.html', { root: __dirname });
});

app.listen(80); //the port you want to use