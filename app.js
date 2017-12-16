const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // eslint-disable-line
const {ObjectID} = require('mongodb'); // eslint-disable-line

const accounts = require('./routes/accountsRouter');
const jobs = require('./routes/jobsRouter');

// const {mongoose} = require('./db/mongoose');

const app = express();

app.use('/static', express.static(path.join(__dirname + '/static')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Working');
});

app.use('/jobs', jobs);
app.use('/accounts', accounts);

module.exports = app;
