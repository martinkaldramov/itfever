var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var {ObjectID} = require('mongodb');

// var {mongoose} = require('./db/mongoose');

var app = express();

app.use('/static', express.static(path.join(__dirname + '/../static')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Working');  
});

module.exports = app;
