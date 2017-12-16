const mongoose = require('mongoose'); // eslint-disable-line

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/IT_Pool_Test_DB', {
  useMongoClient: true
});

module.exports = {mongoose}
