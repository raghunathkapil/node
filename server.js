//server.js

//Call the packages we need.
var express = require('express'); //call express.
var app = express(); //define app using express.

var bodyParser = require('body-parser');
var path = require('path');

//Configure app with body parser.
//this will var us to get data from a POST.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8990; //set the port.

//for testing

app.get('/', function (req, res) {
    //   res.json({ message: 'hooray! welcome to our api!' });
    res.sendFile(__dirname + '/client/index.html')
});

app.use('/client', express.static(__dirname + '/client'));
var apiController = require('./server/controller');
app.use('/api', apiController);


/** START THE SERVER **/

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});