const mongoose = require('mongoose'); // eslint-disable-line

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Carnificina', {
  useMongoClient: true
});

module.exports = {mongoose}
