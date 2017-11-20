const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var CompanySchema = Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  accType: {type: String, required: true},
  name: {type: String, required: true},
  activeJobs: {type: Schema.Types.ObjectId, ref: 'Job'},
  archivedJobs: {type: Schema.Types.ObjectId, ref: 'Job'},
  address: {type: String, required: true},
  phone: Number,
  webUrl: String
});

module.exports = mongoose.model('Company', CompanySchema);
