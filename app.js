const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // eslint-disable-line
const {ObjectID} = require('mongodb'); // eslint-disable-line

// const {mongoose} = require('./db/mongoose');

const app = express();

app.use('/static', express.static(path.join(__dirname + '/static')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Working');
});

module.exports = app;
